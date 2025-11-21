declare module 'nprogress' {
  export interface NProgressOptions {
    minimum?: number
    template?: string
    easing?: string
    speed?: number
    trickle?: boolean
    trickleSpeed?: number
    showSpinner?: boolean
    barSelector?: string
    spinnerSelector?: string
    parent?: string
  }

  export function configure(options: NProgressOptions): void
  export function start(): void
  export function done(force?: boolean): void
  export function inc(amount?: number): void
  export function set(n: number): void
  export function status(): number | null
  export function remove(): void
}