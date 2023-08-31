import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/vue'
import { afterEach, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})
