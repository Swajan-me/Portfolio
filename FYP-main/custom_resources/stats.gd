class_name Stats
extends Resource

signal stats_changed

@export var max_health := 1
@export var art: Texture

var health: int : set = set_health
var block: int : set = set_block

#Capping the valie of health at 0 and maxhealth so that it does exceed on either side.
func set_health(value : int) -> void:
	health = clampi(value, 0, max_health)
	stats_changed.emit()

#block value is clamped for the same reason but the value can exceed 99 in this case but that might not be useful
func set_block(value : int) -> void:
	block = clampi(value, 0, 99)
	stats_changed.emit()


func take_damage(damage : int) -> void:
	if damage <= 0:
		return
	var initial_damage = damage
	damage = clampi(damage - block, 0, damage)   #clamped the value between 0 and dmg, if the blocked is more than dmg then it would show in negative so there would be no point in that.
	self.block = clampi(block - initial_damage, 0, block)  #same as the above dmg.
	self.health -= damage #Main display health

func heal(amount : int) -> void:
	self.health += amount

func create_instance() -> Resource:
	var instance: Stats = self.duplicate()
	instance.health = max_health
	instance.block = 0
	return instance
