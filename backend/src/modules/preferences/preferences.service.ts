import prisma from '../../shared/utils/prisma';

export interface ExplicitPreferenceInput {
  priceRange?: number;  // 1-4
  dietaryRestrictions?: string[];
  spiceTolerance?: string;  // 'mild' | 'medium' | 'spicy'
  dislikedIngredients?: string[];
}

class PreferencesService {
  async getOrCreatePreference(userId: string) {
    let preference = await prisma.userPreference.findUnique({
      where: { userId }
    });

    if (!preference) {
      preference = await prisma.userPreference.create({
        data: {
          userId,
          cuisineScores: {},
          priceRange: 2,
          dietaryRestrictions: [],
          spiceTolerance: 'medium',
          dislikedIngredients: []
        }
      });
    }

    return preference;
  }

  async updateExplicitPreference(userId: string, data: ExplicitPreferenceInput) {
    return prisma.userPreference.update({
      where: { userId },
      data: {
        priceRange: data.priceRange,
        dietaryRestrictions: data.dietaryRestrictions,
        spiceTolerance: data.spiceTolerance,
        dislikedIngredients: data.dislikedIngredients
      }
    });
  }

  async resetPreference(userId: string) {
    return prisma.userPreference.update({
      where: { userId },
      data: {
        cuisineScores: {}
      }
    });
  }
}

export const preferencesService = new PreferencesService();
