import { useRef, useState } from 'react';
import { useLocketPhotos } from './useLocketPhotos';

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const { addPhoto } = useLocketPhotos();

  useEffect(() => {
    if (isCameraOpen && videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.play().catch(e => console.error("Play error:", e));
    }
  }, [isCameraOpen, stream]);

  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      }).catch(async () => {
        // Fallback for devices without environment camera (like many webcams)
        return await navigator.mediaDevices.getUserMedia({ video: true });
      });
      setStream(newStream);
      setIsCameraOpen(true);
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert("Không thể truy cập camera. Vui lòng cấp quyền.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraOpen(false);
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        if (dataUrl && dataUrl.length > 10) {
          addPhoto(dataUrl);
        }
        stopCamera();
      }
    }
  };

  return {
    videoRef,
    canvasRef,
    isCameraOpen,
    startCamera,
    stopCamera,
    takePhoto
  };
}
