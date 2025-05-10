from pydub import AudioSegment
import simpleaudio as sa
import io

def play_audio(mp3_bytes):
    audio = AudioSegment.from_file(io.BytesIO(mp3_bytes), format="mp3")
    audio.export("temp.wav", format="wav")
    wave_obj = sa.WaveObject.from_wave_file("temp.wav")
    play_obj = wave_obj.play()
    play_obj.wait_done()
