export interface ISpice {
  name: string,
  price: string,
  taste: string
}

export interface ISpiceList {
  data: ISpice[],
  updateList: (arg: string) => void
}

export interface IButton {
  spiceName: string,
  show: boolean,
  updateList(arg: string): void,
  emptyDisplay(arg:boolean): void
}

export interface ISpiceDisplay {
  name?: string,
  price?: string,
  taste?: string,
  updateList: (arg: string) => void,
}
