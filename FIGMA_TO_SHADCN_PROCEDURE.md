# Figma Design System to shadcn/ui Conversion Procedure

## Overview
This procedure outlines the systematic approach to convert a Figma design system into a shadcn/ui design system, with a primary focus on generating the main CSS file (Merlin.css). The process ensures that only design tokens and components explicitly defined in the Figma file are implemented.

## Prerequisites
- Access to the Figma design system file
- Figma API access or manual extraction capabilities
- Node.js and pnpm installed
- shadcn/ui CLI installed (`npx shadcn@latest init`)
- Storybook for component documentation and review

## Phase 1: Figma Analysis and Token Extraction

### 1.1 Design System Audit
1. **Access the Figma file** and identify the design system structure:
   - Look for pages named "Design System", "Tokens", "Foundation", or similar
   - Identify color palettes, typography scales, spacing systems, and component libraries

### 1.2 Extract Design Tokens
Document the following from the Figma file:

#### Colors
- **Primary colors**: Brand colors, accent colors
- **Semantic colors**: Success, warning, error, info states
- **Neutral colors**: Grays, blacks, whites
- **Surface colors**: Background, card, modal, overlay colors
- **Text colors**: Primary, secondary, disabled text colors
- **Border colors**: Default, focus, error border colors

#### Typography
- **Font families**: Primary, secondary, monospace fonts
- **Font sizes**: Scale from smallest to largest (e.g., xs, sm, base, lg, xl, 2xl, etc.)
- **Font weights**: Light, regular, medium, semibold, bold, extrabold
- **Line heights**: For each font size
- **Letter spacing**: Tracking values

#### Spacing
- **Spacing scale**: Consistent spacing values (e.g., 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
- **Component spacing**: Padding and margin values used in components

#### Border Radius
- **Radius values**: Small, medium, large radius values
- **Component-specific radius**: Button, card, input, modal radius values

#### Shadows
- **Elevation levels**: Different shadow depths for various UI layers
- **Component shadows**: Button, card, modal, dropdown shadows

#### Breakpoints
- **Responsive breakpoints**: Mobile, tablet, desktop breakpoints
- **Container widths**: Maximum content widths

### 1.3 Component Inventory
List all components defined in the Figma file:
- Buttons (primary, secondary, ghost, destructive, etc.)
- Form elements (inputs, selects, checkboxes, radio buttons)
- Navigation (menus, breadcrumbs, pagination)
- Layout (cards, modals, drawers, sidebars)
- Feedback (alerts, toasts, progress indicators)
- Data display (tables, lists, badges, avatars)

## Phase 2: Project Setup and Configuration

### 2.1 Initialize shadcn/ui
```bash
npx shadcn@latest init
```
Configure with:
- TypeScript: Yes
- Style: New York (or Default based on design)
- Base color: Slate (or closest to Figma primary)
- CSS variables: Yes
- Tailwind prefix: (leave empty unless specified)

### 2.2 Install Required Dependencies
```bash
pnpm add @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
pnpm add -D @types/node
```

### 2.3 Initialize Storybook
```bash
npx storybook@latest init
```

### 2.4 Install Storybook Addons
```bash
pnpm add -D @storybook/addon-docs @storybook/addon-controls @storybook/addon-viewport @storybook/addon-backgrounds @storybook/addon-measure @storybook/addon-outline
```

## Phase 3: Generate Merlin.css

### 3.1 Create Base CSS Structure
Create `src/merlin.css` with the following structure:

```css
@import "tailwindcss";

/* Custom variant for dark mode */
@custom-variant dark (&:is(.dark *));

/* Theme configuration with CSS variables */
@theme inline {
  /* Radius tokens */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  
  /* Color mappings to CSS variables */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  /* ... continue with all color mappings */
}

/* Light theme variables */
:root {
  /* Extract exact values from Figma */
  --radius: [value from Figma];
  --background: [color from Figma];
  --foreground: [color from Figma];
  /* ... continue with all tokens */
}

/* Dark theme variables */
.dark {
  /* Extract exact values from Figma dark mode */
  --background: [dark color from Figma];
  --foreground: [dark color from Figma];
  /* ... continue with all dark tokens */
}

/* Base styles */
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 3.2 Extract and Map Figma Tokens

#### Color Token Extraction Process:
1. **For each color in Figma**:
   - Copy the exact hex/HSL/RGB value
   - Convert to OKLCH format for better color manipulation
   - Map to appropriate CSS custom property
   - Ensure both light and dark variants are captured

2. **Color Mapping Strategy**:
   ```
   Figma Primary Brand → --primary
   Figma Secondary Brand → --secondary
   Figma Success Color → --success (if exists)
   Figma Warning Color → --warning (if exists)
   Figma Error Color → --destructive
   Figma Background → --background
   Figma Surface → --card
   Figma Text Primary → --foreground
   Figma Text Secondary → --muted-foreground
   ```

#### Typography Token Extraction:
1. **Font Family**: Extract exact font names from Figma
2. **Font Sizes**: Convert Figma font sizes to rem values
3. **Font Weights**: Map Figma weights to CSS font-weight values
4. **Line Heights**: Extract and convert to unitless values

#### Spacing Token Extraction:
1. **Spacing Scale**: Extract all spacing values used in Figma
2. **Convert to consistent units**: Use rem for responsive spacing
3. **Map to Tailwind spacing scale**: Ensure values align with Tailwind's default scale

### 3.3 Component-Specific Styles

For each component identified in Figma:

1. **Extract component-specific tokens**:
   - Button variants (primary, secondary, ghost, etc.)
   - Input states (default, focus, error, disabled)
   - Card elevations and variants
   - Modal and overlay styles

2. **Create component CSS classes**:
   ```css
   @layer components {
     .btn-primary {
       @apply bg-primary text-primary-foreground hover:bg-primary/90;
     }
     .btn-secondary {
       @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
     }
     /* ... continue for all components */
   }
   ```

## Phase 4: Storybook Component Documentation and Review

### 4.1 Configure Storybook for Design System

#### Update `.storybook/main.ts`:
```typescript
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
```

#### Update `.storybook/preview.ts`:
```typescript
import type { Preview } from '@storybook/react'
import '../src/merlin.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0a0a0a' },
        { name: 'neutral', value: '#f5f5f5' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
}

export default preview
```

### 4.2 Create Design Token Stories

#### Create `src/stories/DesignTokens.stories.tsx`:
```typescript
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

// Color Palette Story
export const ColorPalette: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Color Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <div className="h-16 bg-primary rounded"></div>
          <p className="text-sm font-medium">Primary</p>
          <p className="text-xs text-muted-foreground">var(--primary)</p>
        </div>
        <div className="space-y-2">
          <div className="h-16 bg-secondary rounded"></div>
          <p className="text-sm font-medium">Secondary</p>
          <p className="text-xs text-muted-foreground">var(--secondary)</p>
        </div>
        {/* Add all color tokens from Figma */}
      </div>
    </div>
  ),
}

// Typography Scale Story
export const TypographyScale: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Typography Scale</h2>
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold">Heading 1</h1>
          <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Heading 2</h2>
          <p className="text-sm text-muted-foreground">text-3xl font-semibold</p>
        </div>
        {/* Add all typography variants from Figma */}
      </div>
    </div>
  ),
}

// Spacing Scale Story
export const SpacingScale: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Spacing Scale</h2>
      <div className="space-y-4">
        {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((space) => (
          <div key={space} className="flex items-center space-x-4">
            <div className="w-16 text-sm font-mono">{space * 4}px</div>
            <div 
              className="bg-primary h-4" 
              style={{ width: `${space * 4}px` }}
            ></div>
            <div className="text-sm text-muted-foreground">space-{space}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}
```

### 4.3 Create Component Stories

#### Create `src/stories/Button.stories.tsx`:
```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button className="opacity-50">Loading</Button>
    </div>
  ),
}
```

### 4.4 Create Figma Comparison Stories

#### Create `src/stories/FigmaComparison.stories.tsx`:
```typescript
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Review/Figma Comparison',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

export const SideBySideComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Figma vs Implementation Comparison</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Figma Design</h3>
          <div className="border-2 border-dashed border-muted-foreground/25 p-8 rounded-lg">
            <p className="text-muted-foreground text-center">
              [Screenshot of Figma component goes here]
            </p>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Figma Component: Button/Primary
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Implementation</h3>
          <div className="border border-border p-8 rounded-lg">
            <Button>Primary Button</Button>
            <p className="text-xs text-muted-foreground mt-2">
              Implementation: Button/Primary
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Review Notes:</h4>
        <ul className="text-sm space-y-1">
          <li>✓ Color matches Figma specification</li>
          <li>✓ Typography matches design system</li>
          <li>✓ Spacing aligns with design tokens</li>
          <li>⚠ Border radius needs adjustment (Figma: 8px, Current: 6px)</li>
        </ul>
      </div>
    </div>
  ),
}
```

### 4.5 Create Responsive Testing Stories

#### Create `src/stories/ResponsiveTest.stories.tsx`:
```typescript
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Review/Responsive Testing',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const MobileLayout: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  render: () => (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Mobile Layout Test</h1>
      <div className="space-y-4">
        <Button className="w-full">Full Width Button</Button>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline">Option 1</Button>
          <Button variant="outline">Option 2</Button>
        </div>
      </div>
    </div>
  ),
}

export const TabletLayout: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  render: () => (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Tablet Layout Test</h1>
      <div className="grid grid-cols-2 gap-4">
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </div>
    </div>
  ),
}

export const DesktopLayout: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold">Desktop Layout Test</h1>
      <div className="flex gap-4">
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
        <Button variant="ghost">Tertiary Action</Button>
      </div>
    </div>
  ),
}
```

### 4.6 Storybook Review Process

#### 4.6.1 Visual Review Checklist
Create a systematic review process:

1. **Component Accuracy**:
   - [ ] Colors match Figma specifications exactly
   - [ ] Typography scale aligns with design system
   - [ ] Spacing values are consistent
   - [ ] Border radius matches design tokens
   - [ ] Shadows and elevations are correct

2. **Interactive States**:
   - [ ] Hover states work correctly
   - [ ] Focus states are visible and accessible
   - [ ] Disabled states are clearly indicated
   - [ ] Loading states are implemented

3. **Responsive Behavior**:
   - [ ] Components scale properly on mobile
   - [ ] Tablet layouts are optimized
   - [ ] Desktop layouts utilize space effectively
   - [ ] Breakpoints align with Figma specifications

4. **Accessibility**:
   - [ ] Color contrast meets WCAG standards
   - [ ] Focus indicators are visible
   - [ ] Screen reader compatibility
   - [ ] Keyboard navigation works

#### 4.6.2 Review Workflow
1. **Start Storybook**: `pnpm storybook`
2. **Navigate through each story** systematically
3. **Compare with Figma designs** side by side
4. **Test all interactive states** and variants
5. **Verify responsive behavior** across viewports
6. **Document discrepancies** and required fixes
7. **Update components** based on review findings
8. **Re-test** until all issues are resolved

## Phase 5: Validation and Testing

### 4.1 Visual Comparison
1. **Create test components** using the generated CSS
2. **Compare with Figma designs** side by side
3. **Verify color accuracy** using design tools
4. **Test responsive behavior** across breakpoints

### 4.2 Accessibility Validation
1. **Check color contrast ratios** meet WCAG standards
2. **Verify focus states** are clearly visible
3. **Test keyboard navigation** for interactive components

### 4.3 Cross-browser Testing
1. **Test in major browsers** (Chrome, Firefox, Safari, Edge)
2. **Verify CSS custom properties** work correctly
3. **Check dark mode implementation** across browsers

## Phase 5: Documentation and Maintenance

### 5.1 Create Token Documentation
Document all extracted tokens with:
- Figma source reference
- CSS custom property name
- Usage guidelines
- Example implementations

### 5.2 Version Control
1. **Tag the initial version** of Merlin.css
2. **Document any deviations** from Figma designs
3. **Create update procedures** for future Figma changes

## Phase 6: Integration with shadcn/ui Components

### 6.1 Install Required Components
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
# ... add all components identified in Figma
```

### 6.2 Customize Component Styles
1. **Override default shadcn styles** with Figma-specific values
2. **Ensure consistency** with design system
3. **Test component variants** match Figma specifications

## Quality Assurance Checklist

- [ ] All colors match Figma designs exactly
- [ ] Typography scale is consistent with Figma
- [ ] Spacing values align with design system
- [ ] Dark mode implementation is complete
- [ ] All components render correctly in Storybook
- [ ] Responsive behavior matches Figma breakpoints
- [ ] Accessibility standards are met
- [ ] Cross-browser compatibility verified
- [ ] Performance is optimized
- [ ] Documentation is complete
- [ ] Storybook stories cover all component variants
- [ ] Figma comparison stories are accurate
- [ ] Interactive states work correctly
- [ ] Component showcase demonstrates real-world usage

## Common Pitfalls to Avoid

1. **Don't assume values**: Only use what's explicitly defined in Figma
2. **Don't skip dark mode**: Ensure both light and dark variants are implemented
3. **Don't ignore accessibility**: Always check contrast ratios and focus states
4. **Don't hardcode values**: Use CSS custom properties for maintainability
5. **Don't skip testing**: Thoroughly test across browsers and devices
6. **Don't skip Storybook review**: Use Storybook for systematic visual validation
7. **Don't ignore responsive behavior**: Test all breakpoints thoroughly

## Maintenance and Updates

### When Figma Design System Updates:
1. **Compare new Figma file** with current implementation
2. **Identify changed tokens** and components
3. **Update Merlin.css** with new values
4. **Update Storybook stories** to reflect changes
5. **Test all affected components** in Storybook
6. **Update documentation** and version tags

This procedure ensures a systematic, accurate conversion of Figma design systems to shadcn/ui implementations while maintaining design fidelity and code quality.
