extends CardState

var played: bool

func enter() -> void:

	played = false

	if not card_ui.targets.is_empty():
		# The emit code below allows to remove the tooltip is the card is played.
		Events.tooltip_hide_requested.emit()
		played = true
		card_ui.play()
		
func on_input(_event: InputEvent) -> void:
	if played:
		return
	
	transition_requested.emit(self, CardState.State.BASE)
