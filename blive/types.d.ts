interface MediaInfo {
  mimeType: string;
  corePlayerType: string;
  width: number;
  height: number;
  fps: number;
  videoDataRate: number;
  audioSampleRate: number;
  audioChannel: string;
  audioDataRate: number;
  encoder: string;
  videoSrc: string;
  volume: number; // 0 ~ 1
}

interface RealtimeInfo {
  decodedFrames: number;
  droppedFrames: number;
  latency: number | null;
  audioBufferLength: number;
  audioNetworkActivity: number;
  videoBufferLength: number;
  videoNetworkActivity: number;
}

interface StreamInfo {
  mediaInfo: MediaInfo;
  realtimeInfo: RealtimeInfo;
}

interface VideoTemplate {
  mimeType: string;
  playerCore: string;
  videoInfo: string;
  audioInfo: string;
  encoder: string;
  streamHost: string;
  bufferLength: string;
  droppedFrames: string;
  networkActivity: string;
}

interface VideoPanel {
  template: VideoTemplate;
  /** Video template with DOM bindings */
  templateProxy: VideoTemplate;
  show(): void;
  hide(): void;
  destroy(): void;
  updateVideoTemplate(streamInfo: StreamInfo): void;
  createTemplateProxy(): VideoTemplate;
  /** Repaint the network activity graph */
  repaintGraph(): void;
  combineDataElement(): DocumentFragment;
  computeBps(kbps: number): `${number}Kbps` | `${number}Mbps`;
}

type BodyReader = ReadableStreamDefaultReader<Uint8Array>;
type BodyReadResult = ReadableStreamReadResult<Uint8Array>;

interface Window {
  debugSpyRates: unknown;
}
