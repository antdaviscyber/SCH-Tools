// AudioWorklet processor — runs on dedicated audio thread
// Cannot be interrupted by main thread JS, so no dropped samples
class RecorderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this._buffer = [];
    this._active = true;
    this.port.onmessage = (e) => {
      if (e.data === 'stop') this._active = false;
    };
  }

  process(inputs) {
    if (!this._active) return false;
    const input = inputs[0];
    if (input && input[0]) {
      // Copy channel data — buffer is reused each frame
      this.port.postMessage(new Float32Array(input[0]));
    }
    return true;
  }
}

registerProcessor('recorder-processor', RecorderProcessor);
