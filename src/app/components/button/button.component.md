# Button Component Design Documentation

## Design Goals

- **Consistency**: Create a unified button system that works across the entire application  
- **Accessibility**: Ensure full compliance with WCAG 2.1 AA standards  
- **Flexibility**: Support multiple use cases (actions, links, forms)  
- **Visual Feedback**: Provide clear interactive states  
- **Performance**: Optimize for smooth animations and rendering  

## Design Choices

### Color Scheme & Visual Hierarchy

- **Primary**: Blue (#1976d2) for main actions - highest visual weight  
- **Secondary**: Outlined style for secondary actions - medium visual weight  
- **Tertiary**: Text-only for minimal emphasis - lowest visual weight  

**State Colors**:  
- Hover: 10% darker than base color  
- Active: 20% darker than base color  
- Disabled: 50% opacity  

### Dimensions & Spacing

| Size   | Height | Padding  | Font | Icon |
|--------|--------|----------|------|------|
| Small  | 32px   | 0 12px   | 12px | 16px |
| Medium | 40px   | 0 16px   | 14px | 18px |
| Large  | 48px   | 0 24px   | 16px | 20px |

- **Corner Radius**: 4px (consistent with Material Design)  
- **Icon Spacing**: 8px margin when paired with text  

### Interaction States

1. **Default**: Base styling  
2. **Hover**:  
   - Slight color darkening  
   - Small elevation increase (for primary)  
   - Subtle upward movement (1px translate)  
3. **Active**:  
   - More pronounced color change  
   - Removal of elevation  
   - Reset position  
4. **Focus**:  
   - Blue outline with 2px stroke  
   - 2px offset  
   - Glow effect  
5. **Disabled**:  
   - 50% opacity  
   - `not-allowed` cursor  
   - No interactive states  

### Accessibility

**Keyboard Navigation**:  
- Full tabstop support  
- Space/Enter activation  

**ARIA Attributes**:  
- `aria-disabled` for disabled state  
- `aria-busy` for loading state  
- `role="button"` or `role="link"`  

**Visual Contrast**:  
- Primary: 4.5:1 contrast ratio  
- Secondary/Tertiary: 7:1 contrast ratio  

**Focus Management**:  
- Visible focus indicator  
- Programmatic focus handling  

## Props

| Prop       | Type     | Description                                 | Default   |
|------------|----------|---------------------------------------------|-----------|
| `variant`  | string   | Button style: 'primary', 'secondary', 'tertiary' | 'primary' |
| `size`     | string   | Button size: 'small', 'medium', 'large'     | 'medium'  |
| `iconLeft` | string   | Material icon name for left icon            | -         |
| `iconRight`| string   | Material icon name for right icon           | -         |
| `loading`  | boolean  | Shows loading spinner                       | false     |
| `disabled` | boolean  | Disables the button                         | false     |
| `href`     | string   | Renders as a link if provided               | -         |
| `target`   | string   | Link target (used with `href`)              | -         |
| `label`    | string   | Button text                                 | 'Button'  |

## Visual Spec

**Primary Button Sizes**
```text
┌──────────────────────────────────────┐
│              PRIMARY                 │                
├───────────┬───────────┬──────────────┤
│   Small   │  Medium   │     Large    │
└───────────┴───────────┴──────────────┘
```

**States**
```text
[ Normal ] [ Hover ] [ Active ] [ Focus ] [ Disabled ]
```

**Variants**
```text
┌───────────┐ ┌───────────┐ ┌───────────┐
│   Primary │ │ Secondary │ │ Tertiary  │
└───────────┘ └───────────┘ └───────────┘
```

**With Icons**
```text
┌───────────────────┐ ┌───────────────────┐
│   ← Icon + Text   │ │   Text + Icon →   │
└───────────────────┘ └───────────────────┘
```

**Loading State**
```text
┌───────────────────┐
│ [spinner] Loading │
└───────────────────┘
```

## Implementation Notes

**Animation**:  
- All transitions use `cubic-bezier(0.4, 0, 0.2, 1)`  
- Spinner animation is smooth 0.6s linear infinite  
- State changes animate at 200ms duration  

**Technical Considerations**:  
- Uses Angular Signals for reactive state  
- Pure CSS animations for performance  
- Smart content detection for icon spacing  
- Conditional ARIA attributes  

**Browser Support**:  
- Fully supports modern browsers  
- Progressive enhancement for older browsers  
- `-webkit-tap-highlight-color` for mobile  

This design system provides a comprehensive button component that balances aesthetic appeal with functional requirements and accessibility needs. The component adapts to various contexts while maintaining consistent interaction patterns.