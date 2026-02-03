extends Control

const MAIN_MENU := preload("res://scenes/ui/main_menu.tscn")

# 
func _ready() -> void:
	get_tree().paused = false


func _on_menu_pressed() -> void:
	print("button worked")
	var main_menu_scene = MAIN_MENU.instantiate()
	get_tree().root.add_child(main_menu_scene)
	get_tree().current_scene.queue_free()


func _on_quit_pressed() -> void:
	get_tree().quit()
