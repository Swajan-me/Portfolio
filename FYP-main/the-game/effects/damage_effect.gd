class_name DamageEffect
extends Effect

# Amount to change, it scales.
var amount := 0


func execute(targets: Array[Node]) -> void:
	for target in targets:
		if not target:      # Surrounding, Non interactive area
			continue
		if target is Enemy or target is Player:
			target.take_damage(amount)
