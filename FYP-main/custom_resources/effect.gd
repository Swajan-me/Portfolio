class_name Effect
extends RefCounted

var sound: AudioStream

# Other commands have to make sure that they pull from the effects.
func execute(_targets: Array[Node]) -> void:
	pass
