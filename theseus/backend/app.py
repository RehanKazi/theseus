from flask import Flask, request
from elevenlabs_api import synthesize_speech
from audio_utils import play_audio

app = Flask(__name__)

voice_map = {}  # { "Rehan": "voice_id_xyz" }

@app.route("/speak", methods=["POST"])
def speak():
    data = request.json
    user = data["user"]
    msg = data["msg"]
    voice_id = voice_map.get(user, "YOUR_DEFAULT_VOICE_ID")
    audio = synthesize_speech(voice_id, msg)
    play_audio(audio)
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(port=5000)
