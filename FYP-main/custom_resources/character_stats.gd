class_name CharacterStats
extends Stats


@export_group("Visual Main Menu")
@export var character_name: String
@export_multiline var description: String
@export var portrait: Texture

@export_group("Gameplay Data")
@export var starting_deck: CardPile
@export var cards_per_turn: int
@export var max_mana: int

var mana: int : set = set_mana
var deck: CardPile
var discard: CardPile
var draw_pile: CardPile

#not clamping the value  
func set_mana(value: int) -> void:
	mana = value
	stats_changed.emit()

func reset_mana() -> void:
	self.mana = max_mana

func can_play_card(card: Card) -> bool:
	return mana >= card.cost

func take_damage(damage: int) -> void:
	var initial_health := health
	super.take_damage(damage)          # calling from parent class; Stats
	if initial_health > health:     # If the initial HP > than the current one then the red flash occurs, so if they have shield then they will not take dmg, somewhat.
		Events.player_hit.emit() 

func create_instance() -> Resource:
	var instance: CharacterStats = self.duplicate()   
	instance.health = max_health
	instance.block = 0
	instance.reset_mana()
	instance.deck = instance.starting_deck.duplicate()  #current deck and starting decks are different from one another
	instance.draw_pile = CardPile.new()   #default as 0
	instance.discard = CardPile.new()   #default as 0
	return instance
