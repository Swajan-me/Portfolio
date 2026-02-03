extends Control

const CHAR_SELECTOR_SCENE := preload("res://scenes/ui/character_selector.tscn")

@export var music: AudioStream

# 
func _ready() -> void:
	MusicPlayer.play(music, true)
	get_tree().paused = false

func _on_new_game_pressed() -> void:
	get_tree().change_scene_to_packed(CHAR_SELECTOR_SCENE)
	#print("New game")

func _on_tutorial_pressed() -> void:
	var file_path = "C:/Users/swaja/Desktop/FYP/the-game/Tutorial.pptx"
	OS.shell_open(file_path)

func _on_exit_pressed() -> void:
	get_tree().quit()
