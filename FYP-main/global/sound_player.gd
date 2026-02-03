extends Node

# audio
func play(audio: AudioStream, single=false) -> void:
	if not audio:      # Checking if we have valid audio file
		return
		
	if single:         # if single is set to true then no other can played over it.
		stop()
	
	for player in get_children():
		player = player as AudioStreamPlayer
	
		if not player.playing:
			player.stream = audio
			player.play()
			break

func stop() -> void:
	for player: AudioStreamPlayer in get_children():
		player.stop()
