const initalState = [
  { id: 1, isFlipped: true },
  { id: 2, isFlipped: true },
  { id: 3, isFlipped: true },
  { id: 4, isFlipped: true },
  { id: 5, isFlipped: true },
  { id: 6, isFlipped: true },
  { id: 7, isFlipped: true },
  { id: 8, isFlipped: true },
  { id: 9, isFlipped: true },
  { id: 10, isFlipped: true },
  { id: 11, isFlipped: true },
  { id: 12, isFlipped: true }
]

export function cards(state = initalState, action) {
  switch (action.type) {
    case "FLIP_CARD":
      const newState = state.map(card =>
        card.id === action.id ? { ...card, isFlipped: !card.isFlipped} : { ...card, isFlipped: true }
      )
      return newState

    default:
      return state;
  }
}