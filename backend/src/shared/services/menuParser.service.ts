export interface ParsedMenuItem {
  name: string;
  priceVND: number | null;
  category: string;
  tags: string[];
}

export interface ParsedMenuResult {
  items: ParsedMenuItem[];
  confidence: number;
  rawText: string;
}

export class MenuParserService {
  private static removeDiacritics(str: string): string {
    return str.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

  static normalizePrice(raw: string): number | null {
    let processed = raw.toLowerCase().replace(/\s/g, '');
    
    if (processed.includes('k')) {
      const num = parseFloat(processed.replace('k', '').replace(',', '.'));
      if (!isNaN(num)) return num * 1000;
    }
    
    processed = processed.replace(/đ/g, '').replace(/d/g, '');
    processed = processed.replace(/\./g, '').replace(/,/g, '');
    
    const num = parseInt(processed, 10);
    if (!isNaN(num) && num > 1000) {
      return num;
    }
    
    return null;
  }

  static isHeader(line: string): boolean {
    const normalized = MenuParserService.removeDiacritics(line.toLowerCase()).trim();
    const headerKeywords = ['mon chinh', 'do uong', 'khai vi', 'trang mieng', 'dac biet', 'menu', 'thuc don'];
    
    if (normalized.length < 3 || normalized.length > 30) return false;
    if (line === line.toUpperCase() && line.match(/[A-Z]/)) return true;
    
    return headerKeywords.some(kw => normalized.includes(kw));
  }

  static isPageNumber(line: string): boolean {
    const trimmed = line.trim();
    if (/^\d+$/.test(trimmed)) return true;
    if (/^page\s*\d+$/i.test(trimmed)) return true;
    if (/^trang\s*\d+$/i.test(trimmed)) return true;
    return false;
  }

  static inferCategory(name: string): string {
    const normalized = MenuParserService.removeDiacritics(name.toLowerCase());
    
    const categories: Record<string, string[]> = {
      'mon chinh': ['com', 'bun', 'pho', 'mi', 'hu tieu', 'banh mi', 'banh canh'],
      'do uong': ['nuoc', 'tra', 'ca phe', 'sinh to', 'bia', 'ruou', 'soda', 'coca'],
      'protein': ['ga', 'heo', 'bo', 'tom', 'ca', 'muc', 'cua'],
      'trang mieng': ['che', 'kem', 'banh', 'trai cay']
    };

    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(kw => normalized.includes(kw))) {
        return category;
      }
    }
    
    return 'khac';
  }

  static inferTags(name: string): string[] {
    const normalized = MenuParserService.removeDiacritics(name.toLowerCase());
    const tags = new Set<string>();
    
    const tagKeywords: Record<string, string[]> = {
      'cay': ['cay', 'ot', 'sate', 'wasabi', 'kim chi'],
      'chay': ['chay', 'vegetarian', 'rau cu', 'dau hu', 'dau phu'],
      'chien': ['chien', 'ran', 'gion'],
      'nuong': ['nuong', 'than', 'bbq'],
      'hap': ['hap', 'steam'],
      'soup': ['sup', 'canh', 'lau']
    };

    for (const [tag, keywords] of Object.entries(tagKeywords)) {
      if (keywords.some(kw => normalized.includes(kw))) {
        tags.add(tag);
      }
    }
    
    return Array.from(tags);
  }

  static calculateConfidence(items: ParsedMenuItem[]): number {
    if (items.length === 0) return 0;
    const itemsWithPrice = items.filter(item => item.priceVND !== null).length;
    return itemsWithPrice / items.length;
  }

  static parse(rawText: string): ParsedMenuResult {
    const lines = rawText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const items: ParsedMenuItem[] = [];
    
    for (const line of lines) {
      if (MenuParserService.isPageNumber(line) || MenuParserService.isHeader(line)) {
        continue;
      }
      
      const priceRegex = /\s+(\d+[kK]|\d{1,3}(?:[.,]\d{3})*(?:\s*đ|\s*d)?)$/;
      const match = line.match(priceRegex);
      
      let name = line;
      let price = null;
      
      if (match) {
        name = line.substring(0, match.index).trim();
        price = MenuParserService.normalizePrice(match[1]);
      } else {
        const tokens = line.split(/\s+/);
        const lastToken = tokens[tokens.length - 1];
        if (lastToken) {
          const possiblePrice = MenuParserService.normalizePrice(lastToken);
          if (possiblePrice !== null) {
            price = possiblePrice;
            name = tokens.slice(0, -1).join(' ').trim();
          }
        }
      }
      
      if (name) {
        items.push({
          name,
          priceVND: price,
          category: MenuParserService.inferCategory(name),
          tags: MenuParserService.inferTags(name)
        });
      }
    }
    
    return {
      items,
      confidence: MenuParserService.calculateConfidence(items),
      rawText
    };
  }
}
