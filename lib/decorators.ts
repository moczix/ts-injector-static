export function module(constructor: Function): void {

}

export function singleton(): void {

}

export function provide(constructor?: Function) {

}

export function Injector(modules: any[]) {
  return function(constructor?: Function){}
}