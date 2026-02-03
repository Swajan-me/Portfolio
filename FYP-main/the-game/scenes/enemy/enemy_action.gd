class_name EnemyAction
extends Node

# Based on a condition or a random chance.
enum Type {CONDITIONAL, CHANCE_BASED}

@export var intent: Intent
@export var type: Type
# Probability of happening set in chance_weight.
@export_range(0.0, 10.0) var chance_weight := 0.0

@onready var accumulated_weight := 0.0

# Reference to target and enemy.
var enemy: Enemy
var target: Node2D

# Checks if it is to be used or not, will be overriden in sub-class
func is_performable() -> bool:
	return false         # If anything is wrong this false is a safety net.

func perform_action() -> void:
	pass
