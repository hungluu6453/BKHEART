# import io
# import soundfile as sf
# from urllib.request import urlopen

# url = "https://huggingface.co/datasets/lewtun/s3prl-sd-dummy/raw/main/audio.wav"
# file = io.BytesIO(urlopen(url).read())
# data, samplerate = sf.read(file)
# print(hasattr(file, 'seek'))
# print(hasattr(file, 'tell'))
# print(hasattr(file, 'write'))
# print(hasattr(file, 'read'))
# print(hasattr(file, 'readinto'))
# print(io.BytesIO(urlopen(url).read()))

# file = io.BytesIO(file.file.read())

# audio_file, sample_rate = sf.read(file.file.read())


# print(sample_rate)s
# generated_wav, sample_rate = synthesize_speech(audio_file)

# # Output as memory file
# file_format = "WAV"
# memory_file = io.BytesIO( )
# memory_file.name = "generated_audio.wav"
# sf.write(memory_file, generated_wav.astype(np.float32), sample_rate, format=file_format)

# file.file.seek(0)
# data = await file.read()
# print(len(data))
# cur_time = time.time()
# file_path = "./voice/{}".format(file.filename)
# output_file = wave.open(file_path, 'wb')
# output_file.setframerate(48000)
# output_file.setnchannels(1)
# output_file.setsampwidth(1)
# output_file.writeframes(data)
# output_file.close()
# await file.close()

import os

VOICE_PATH = 'voice'
SAVE_WEBM_PATH = "voice/webm_files"
SAVE_WAV_PATH = "voice/wav_files"

if not os.path.exists(VOICE_PATH):
    os.makedirs(VOICE_PATH)
if not os.path.exists(SAVE_WEBM_PATH):
    os.makedirs(SAVE_WEBM_PATH)
if not os.path.exists(SAVE_WAV_PATH):
    os.makedirs(SAVE_WAV_PATH)