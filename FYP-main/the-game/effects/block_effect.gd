class_name BlockEffect
extends Effect

# Amount to block, override this amount in game later.
var amount := 0

func execute(targets: Array[Node]) -> void:
	for target in targets:
		if not target:   # Surrounding, Non interactive area
			continue
		if target is Enemy or target is Player: 
			target.stats.block += amount
