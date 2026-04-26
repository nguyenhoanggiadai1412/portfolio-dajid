declare module 'sockjs-client' {
  export default class SockJS {
    constructor(url: string);
    onopen?: () => void;
    onmessage?: (e: { data: string }) => void;
    onclose?: () => void;
    send(data: string): void;
    close(): void;
  }
}
