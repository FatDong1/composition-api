import { ComponentPropsOptions } from './componentProps'
import {
  MethodOptions,
  ComputedOptions,
  ComponentOptionsWithoutProps,
  ComponentOptionsWithArrayProps,
  ComponentOptionsWithProps,
} from './componentOptions'
import { VueProxy } from './componentProxy'
import { Data } from './common'
import { HasDefined } from '../types/basic'
import { EmitsOptions } from '../runtimeContext'
import { InjectOptions as Vue2InjectOptions } from 'vue/types/options'

/**
 * overload 1: object format with no props
 */
export function defineComponent<
  RawBindings,
  D = Data,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin = {},
  Extends = {},
  Emits extends EmitsOptions = {},
  injectOptions extends Vue2InjectOptions = {}
>(
  options: ComponentOptionsWithoutProps<
    {},
    RawBindings,
    D,
    C,
    M,
    Mixin,
    Extends,
    Emits,
    injectOptions
  >
): VueProxy<{}, RawBindings, D, C, M, Mixin, Extends, Emits>
/**
 * overload 2: object format with array props declaration
 * props inferred as `{ [key in PropNames]?: any }`
 *
 * return type is for Vetur and TSX support
 */
export function defineComponent<
  PropNames extends string,
  RawBindings = Data,
  D = Data,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin = {},
  Extends = {},
  Emits extends EmitsOptions = {},
  PropsOptions extends ComponentPropsOptions = ComponentPropsOptions,
  injectOptions extends Vue2InjectOptions = {}
>(
  options: ComponentOptionsWithArrayProps<
    PropNames,
    RawBindings,
    D,
    C,
    M,
    Mixin,
    Extends,
    Emits,
    injectOptions
  >
): VueProxy<
  Readonly<{ [key in PropNames]?: any }>,
  RawBindings,
  D,
  C,
  M,
  Mixin,
  Extends,
  Emits
>

/**
 * overload 3: object format with object props declaration
 *
 * see `ExtractPropTypes` in './componentProps.ts'
 */
export function defineComponent<
  Props,
  RawBindings = Data,
  D = Data,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin = {},
  Extends = {},
  Emits extends EmitsOptions = {},
  PropsOptions extends ComponentPropsOptions = ComponentPropsOptions,
  injectOptions extends Vue2InjectOptions = {}
>(
  options: HasDefined<Props> extends true
    ? ComponentOptionsWithProps<
        PropsOptions,
        RawBindings,
        D,
        C,
        M,
        Mixin,
        Extends,
        Emits,
        injectOptions,
        Props
      >
    : ComponentOptionsWithProps<
        PropsOptions,
        RawBindings,
        D,
        C,
        M,
        Mixin,
        Extends,
        Emits,
        injectOptions
      >
): VueProxy<PropsOptions, RawBindings, D, C, M, Mixin, Extends, Emits>

// implementation, close to no-op
export function defineComponent(options: any) {
  return options as any
}
