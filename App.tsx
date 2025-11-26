import React, { useState } from 'react';
import {
  Leaf,
  Wind,
  Mountain,
  Droplets,
  ArrowRight,
  Check,
  X,
  Menu,
  Bell,
  User,
  Terminal,
  Layers
} from 'lucide-react';

// Component Imports
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { Badge } from './components/Badge';
import { Carousel, SlideData } from './components/Carousel';
import { CookieConsent } from './components/CookieConsent';
import { Box } from './components/Box';
import { Container } from './components/Container';
import { Stack } from './components/Stack';
import { Grid, Col } from './components/Grid';
import { Divider } from './components/Divider';
import { SectionHeader, ColorSwatch } from './components/DemoHelpers';

export default function App() {
  const [activeTab, setActiveTab] = useState('components');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'foundations', label: 'Foundations', icon: Layers },
    { id: 'colors', label: 'Palette', icon: Droplets },
    { id: 'typography', label: 'Typography', icon: Wind },
    { id: 'components', label: 'Components', icon: Leaf },
    { id: 'layout', label: 'Layout Examples', icon: Mountain },
    { id: 'usage', label: 'Usage', icon: Terminal },
  ];

  // Data for Carousel Demo
  const carouselSlides: SlideData[] = [
    {
      title: "Morning Mist",
      content: "Experience the calm of the Nordic dawn. The palette is inspired by the heavy fog that rolls over the fjords.",
      icon: <Wind size={24} />,
      bgClass: "bg-gradient-to-br from-stone-200 to-stone-300"
    },
    {
      title: "Deep Forest",
      content: "Dark greens and rich browns create a grounded, stable foundation for user interfaces.",
      icon: <Leaf size={24} />,
      bgClass: "bg-gradient-to-br from-emerald-200 to-emerald-300"
    },
    {
      title: "Granite Strength",
      content: "Reliability and permanence. Stone greys provide excellent contrast for text without the harshness of pure black.",
      icon: <Mountain size={24} />,
      bgClass: "bg-gradient-to-br from-stone-400 to-stone-500"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Mobile Nav Toggle */}
      <div className="lg:hidden bg-white p-4 flex justify-between items-center border-b border-stone-200 sticky top-0 z-20">
        <span className="font-bold text-lg flex items-center gap-2 text-stone-800">
          <Mountain className="text-emerald-700" /> Nordic UI
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Sidebar Navigation */}
        <aside className={`
          fixed inset-0 z-10 bg-[#2F3E46] text-stone-300 w-64 transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:block lg:h-screen lg:sticky lg:top-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-white">
              <div className="p-2 bg-emerald-900 rounded-lg">
                <Mountain size={24} className="text-emerald-400" />
              </div>
              <div>
                <h1 className="font-bold text-xl tracking-tight">Nordic UI</h1>
                <p className="text-xs text-stone-400 uppercase tracking-wider">Design Guide v1.1</p>
              </div>
            </div>

            <nav className="space-y-2 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${activeTab === item.id
                      ? 'bg-[#354F52] text-white shadow-lg shadow-black/20'
                      : 'hover:bg-[#354F52] hover:text-white'
                    }
                  `}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-[#354F52]">
              <p className="text-xs text-stone-400 mb-4 italic">
                "Functionality in beauty, <br />calm in chaos."
              </p>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                System Operational
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-12 overflow-y-auto bg-stone-50">
          <div className="max-w-5xl mx-auto">

            {/* FOUNDATIONS SECTION */}
            {activeTab === 'foundations' && (
              <div className="animate-fadeIn">
                <SectionHeader
                  title="Design Tokens"
                  description="The invisible foundation of the design system. These tokens ensure consistency across all components and applications."
                  icon={Layers}
                />

                <div className="space-y-8">
                  {/* Spacing */}
                  <Card>
                    <h3 className="text-lg font-semibold mb-4 text-stone-700">Spacing Scale</h3>
                    <p className="text-stone-600 text-sm mb-6">A consistent spacing scale based on 4px increments ensures visual rhythm and alignment.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'xs', pixels: '4px', tailwind: '1' },
                        { name: 'sm', pixels: '8px', tailwind: '2' },
                        { name: 'md', pixels: '16px', tailwind: '4' },
                        { name: 'lg', pixels: '24px', tailwind: '6' },
                        { name: 'xl', pixels: '32px', tailwind: '8' },
                        { name: '2xl', pixels: '48px', tailwind: '12' },
                        { name: '3xl', pixels: '64px', tailwind: '16' },
                        { name: '4xl', pixels: '96px', tailwind: '24' }
                      ].map((item) => (
                        <div key={item.name} className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                          <div className="mb-2">
                            <div className="bg-emerald-600 rounded" style={{ height: '8px', width: item.pixels }}></div>
                          </div>
                          <p className="text-xs font-bold text-stone-800">{item.name}</p>
                          <p className="text-xs text-stone-500">{item.pixels}</p>
                          <code className="text-xs text-emerald-700 font-mono">p-{item.tailwind}</code>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Shadows */}
                  <Card>
                    <h3 className="text-lg font-semibold mb-4 text-stone-700">Elevation & Shadows</h3>
                    <p className="text-stone-600 text-sm mb-6">Subtle shadows create depth without being harsh. Used for cards, modals, and dropdowns.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { name: 'None', class: 'shadow-none', desc: 'Flat elements' },
                        { name: 'SM', class: 'shadow-sm', desc: 'Subtle lift' },
                        { name: 'MD', class: 'shadow-md', desc: 'Standard cards' },
                        { name: 'LG', class: 'shadow-lg', desc: 'Modals, popovers' },
                        { name: 'XL', class: 'shadow-xl', desc: 'Overlays' },
                        { name: '2XL', class: 'shadow-2xl', desc: 'Hero elements' }
                      ].map((item) => (
                        <div key={item.name} className="text-center">
                          <div className={`bg-white p-6 rounded-lg border border-stone-100 ${item.class} mb-3`}>
                            <div className="w-12 h-12 mx-auto bg-stone-200 rounded"></div>
                          </div>
                          <p className="text-xs font-bold text-stone-800">{item.name}</p>
                          <p className="text-xs text-stone-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Border Radius */}
                  <Card>
                    <h3 className="text-lg font-semibold mb-4 text-stone-700">Border Radius</h3>
                    <p className="text-stone-600 text-sm mb-6">Consistent corner rounding creates visual harmony. Use larger radii for cards, smaller for inputs.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'None', class: 'rounded-none', value: '0px' },
                        { name: 'SM', class: 'rounded-sm', value: '2px' },
                        { name: 'Default', class: 'rounded', value: '4px' },
                        { name: 'MD', class: 'rounded-md', value: '6px' },
                        { name: 'LG', class: 'rounded-lg', value: '8px' },
                        { name: 'XL', class: 'rounded-xl', value: '12px' },
                        { name: '2XL', class: 'rounded-2xl', value: '16px' },
                        { name: 'Full', class: 'rounded-full', value: '9999px' }
                      ].map((item) => (
                        <div key={item.name} className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                          <div className={`bg-emerald-600 w-16 h-16 mb-2 ${item.class}`}></div>
                          <p className="text-xs font-bold text-stone-800">{item.name}</p>
                          <p className="text-xs text-stone-500">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Breakpoints */}
                  <Card>
                    <h3 className="text-lg font-semibold mb-4 text-stone-700">Responsive Breakpoints</h3>
                    <p className="text-stone-600 text-sm mb-6">Standardized screen widths for consistent responsive behavior across all components.</p>
                    <div className="space-y-3">
                      {[
                        { name: 'Mobile', breakpoint: 'Default', width: '< 640px', desc: 'Phones, small devices' },
                        { name: 'SM', breakpoint: 'sm:', width: '≥ 640px', desc: 'Small tablets' },
                        { name: 'MD', breakpoint: 'md:', width: '≥ 768px', desc: 'Tablets, landscape phones' },
                        { name: 'LG', breakpoint: 'lg:', width: '≥ 1024px', desc: 'Laptops, small desktops' },
                        { name: 'XL', breakpoint: 'xl:', width: '≥ 1280px', desc: 'Desktops' },
                        { name: '2XL', breakpoint: '2xl:', width: '≥ 1536px', desc: 'Large screens' }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border border-stone-200">
                          <div className="flex items-center gap-4 flex-1">
                            <code className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-mono text-xs font-bold min-w-[60px] text-center">{item.breakpoint}</code>
                            <div>
                              <p className="text-sm font-semibold text-stone-800">{item.name}</p>
                              <p className="text-xs text-stone-500">{item.desc}</p>
                            </div>
                          </div>
                          <code className="text-sm text-stone-600 font-mono">{item.width}</code>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Z-Index */}
                  <Card>
                    <h3 className="text-lg font-semibold mb-4 text-stone-700">Z-Index Layers</h3>
                    <p className="text-stone-600 text-sm mb-6">Defined stacking order prevents z-index conflicts and ensures predictable layering.</p>
                    <div className="space-y-2">
                      {[
                        { name: 'Base', value: '0', usage: 'Default layer' },
                        { name: 'Dropdown', value: '10', usage: 'Dropdowns, tooltips' },
                        { name: 'Sticky', value: '20', usage: 'Sticky headers, fixed nav' },
                        { name: 'Modal Backdrop', value: '40', usage: 'Modal overlays' },
                        { name: 'Modal', value: '50', usage: 'Modal dialogs' },
                        { name: 'Toast', value: '60', usage: 'Notifications, alerts' }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-3 bg-stone-50 rounded border border-stone-200">
                          <div className="flex items-center gap-3">
                            <code className="bg-stone-200 text-stone-800 px-2 py-1 rounded font-mono text-xs font-bold w-12 text-center">{item.value}</code>
                            <p className="text-sm font-semibold text-stone-800">{item.name}</p>
                          </div>
                          <p className="text-xs text-stone-500">{item.usage}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* COLORS SECTION */}
            {activeTab === 'colors' && (
              <div className="animate-fadeIn">
                <SectionHeader
                  title="Nature Palette"
                  description="Colors are desaturated and earthy. We avoid pure blacks (#000) in favor of deep stone greys and forest tones to reduce eye strain and create warmth."
                  icon={Droplets}
                />

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-stone-700">Primary & Secondary</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <ColorSwatch name="Deep Pine" hex="#2F3E46" usage="Primary Actions, Headings" />
                      <ColorSwatch name="Fjord" hex="#354F52" usage="Secondary Backgrounds" />
                      <ColorSwatch name="Sage" hex="#84A98C" usage="Accents, Success States" />
                      <ColorSwatch name="Glacier" hex="#CAD2C5" usage="Borders, Subtle Backgrounds" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-stone-700">Neutrals & Surfaces</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <ColorSwatch name="Charcoal" hex="#1C1917" usage="Main Text (Not pure black)" />
                      <ColorSwatch name="Granite" hex="#57534E" usage="Secondary Text, Icons" />
                      <ColorSwatch name="Mist" hex="#E7E5E4" usage="Input Backgrounds, Dividers" />
                      <ColorSwatch name="Snow" hex="#FAFAF9" usage="Page Backgrounds" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-stone-700">Functional</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <ColorSwatch name="Earth" hex="#DDA15E" usage="Warnings, Highlights" />
                      <ColorSwatch name="Berry" hex="#BC4749" usage="Errors, Destructive Actions" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TYPOGRAPHY SECTION */}
            {activeTab === 'typography' && (
              <div className="animate-fadeIn">
                <SectionHeader
                  title="Typography"
                  description="We use a clean sans-serif stack (Inter, Roboto, System UI). The focus is on readability, generous line-heights, and distinct hierarchy."
                  icon={Wind}
                />

                <Card className="mb-8">
                  <div className="space-y-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-b border-stone-100 pb-6">
                      <span className="col-span-2 text-stone-400 text-sm font-mono">Display</span>
                      <h1 className="col-span-10 text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                        Nordic Design
                      </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-b border-stone-100 pb-6">
                      <span className="col-span-2 text-stone-400 text-sm font-mono">H1</span>
                      <h1 className="col-span-10 text-3xl md:text-4xl font-bold text-stone-900">
                        The Quick Brown Fox
                      </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-b border-stone-100 pb-6">
                      <span className="col-span-2 text-stone-400 text-sm font-mono">H2</span>
                      <h2 className="col-span-10 text-2xl md:text-3xl font-semibold text-stone-800">
                        Minimalist Aesthetics
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-b border-stone-100 pb-6">
                      <span className="col-span-2 text-stone-400 text-sm font-mono">H3</span>
                      <h3 className="col-span-10 text-xl font-semibold text-stone-800">
                        Component Architecture
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-b border-stone-100 pb-6">
                      <span className="col-span-2 text-stone-400 text-sm font-mono">Body</span>
                      <p className="col-span-10 text-base leading-relaxed text-stone-600 max-w-2xl">
                        Scandinavians value nature and spending time outdoors. This affinity is reflected in the interior design style: wooden floors, plants in every corner, and large windows to let in as much natural light as possible.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                      <span className="col-span-2 text-stone-400 text-sm font-mono">Small</span>
                      <p className="col-span-10 text-sm text-stone-500">
                        Copyright © 2024 Nordic UI System. All rights reserved.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* COMPONENTS SECTION */}
            {activeTab === 'components' && (
              <div className="animate-fadeIn">
                <SectionHeader
                  title="Interface Elements"
                  description="Primitive components designed with soft borders (rounded-lg), subtle shadows, and clear interaction states."
                  icon={Leaf}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  {/* Carousel Component Feature */}
                  <Card className="col-span-1 lg:col-span-2 bg-white overflow-hidden">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
                      <h3 className="font-semibold text-stone-700">Carousel / Slider</h3>
                      <Badge variant="neutral">New</Badge>
                    </div>

                    <Carousel slides={carouselSlides} />

                    <div className="mt-6 p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-600">
                      <p className="mb-3">The carousel supports generic content, infinite looping logic, and nature-inspired navigation dots. The arrows appear on hover to maintain minimalism.</p>
                      <details className="mt-3">
                        <summary className="cursor-pointer font-semibold text-stone-700 hover:text-emerald-700">View Code</summary>
                        <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-xs overflow-x-auto mt-2 whitespace-pre">
                          {`import { Carousel } from '@eventyr-dev/eventyr-design';

const slides = [
  {
    title: "Morning Mist",
    content: "Experience the calm of Nordic dawn.",
    icon: <Wind size={24} />,
    bgClass: "bg-gradient-to-br from-stone-200 to-stone-300"
  }
];

<Carousel slides={slides} />`}
                        </div>
                      </details>
                    </div>
                  </Card>

                  {/* Buttons */}
                  <Card className="space-y-6">
                    <h3 className="font-semibold text-stone-700 border-b pb-2 border-stone-100">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button>Primary Action</Button>
                      <Button variant="secondary">Natural State</Button>
                      <Button variant="tertiary">Tertiary</Button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost Button</Button>
                      <Button variant="primary" icon={ArrowRight}>With Icon</Button>
                    </div>
                    <details className="mt-4">
                      <summary className="cursor-pointer font-semibold text-stone-700 hover:text-emerald-700 text-sm">View Code</summary>
                      <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-xs overflow-x-auto mt-2 whitespace-pre">
                        {`import { Button } from '@eventyr-dev/eventyr-design';
import { ArrowRight } from 'lucide-react';

<Button>Primary Action</Button>
<Button variant="secondary">Natural State</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="primary" icon={ArrowRight}>With Icon</Button>`}
                      </div>
                    </details>
                  </Card>

                  {/* Form Elements */}
                  <Card className="space-y-6">
                    <h3 className="font-semibold text-stone-700 border-b pb-2 border-stone-100">Form Inputs</h3>
                    <Input label="Email Address" placeholder="name@company.com" type="email" />
                    <Input label="Password" type="password" placeholder="••••••••" />
                    <Input label="Error State" error="This field is required" defaultValue="Invalid input" />

                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-5 h-5 rounded border border-stone-300 bg-white flex items-center justify-center text-emerald-600">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-stone-700 text-sm">Remember me on this device</span>
                    </div>
                    <details className="mt-4">
                      <summary className="cursor-pointer font-semibold text-stone-700 hover:text-emerald-700 text-sm">View Code</summary>
                      <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-xs overflow-x-auto mt-2 whitespace-pre">
                        {`import { Input } from '@eventyr-dev/eventyr-design';

<Input label="Email Address" placeholder="name@company.com" type="email" />
<Input label="Password" type="password" placeholder="••••••••" />
<Input label="Error State" error="This field is required" defaultValue="Invalid input" />`}
                      </div>
                    </details>
                  </Card>

                  {/* Badges & Status */}
                  <Card className="space-y-6">
                    <h3 className="font-semibold text-stone-700 border-b pb-2 border-stone-100">Status Indicators</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="neutral">Documentation</Badge>
                      <Badge variant="success">Completed</Badge>
                      <Badge variant="warning">Pending Review</Badge>
                      <Badge variant="error">Failed</Badge>
                    </div>
                    <details className="mt-4">
                      <summary className="cursor-pointer font-semibold text-stone-700 hover:text-emerald-700 text-sm">View Code</summary>
                      <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-xs overflow-x-auto mt-2 whitespace-pre">
                        {`import { Badge } from '@eventyr-dev/eventyr-design';

<Badge variant="neutral">Documentation</Badge>
<Badge variant="success">Completed</Badge>
<Badge variant="warning">Pending Review</Badge>
<Badge variant="error">Failed</Badge>`}
                      </div>
                    </details>
                    <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 flex gap-3 mt-4">
                      <div className="bg-stone-200 p-1.5 rounded-full h-fit">
                        <Wind size={16} className="text-stone-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-stone-800">Pro Tip</h4>
                        <p className="text-xs text-stone-500 mt-1">Use muted colors for backgrounds to let the content breathe.</p>
                      </div>
                    </div>
                  </Card>

                  {/* Shadows & Radius */}
                  <Card className="space-y-6">
                    <h3 className="font-semibold text-stone-700 border-b pb-2 border-stone-100">Elevation & Depth</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100 text-center text-xs text-stone-500">
                        Shadow SM
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border border-stone-100 text-center text-xs text-stone-500">
                        Shadow MD
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-lg border border-stone-100 text-center text-xs text-stone-500">
                        Shadow LG
                      </div>
                      <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-center text-xs text-stone-500">
                        Flat / Border
                      </div>
                    </div>
                  </Card>

                  {/* Cookie Consent Demo */}
                  <Card className="col-span-1 lg:col-span-2 bg-stone-100 border-dashed">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
                      <h3 className="font-semibold text-stone-700">Cookie Consent Banner</h3>
                      <Badge variant="neutral">Interactive</Badge>
                    </div>

                    <div className="relative min-h-[200px] bg-stone-200 rounded-lg overflow-hidden flex items-end justify-center border border-stone-300">
                      <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm font-mono">
                        [Page Content Area]
                      </div>
                      <CookieConsent
                        fixed={false}
                        variant="detailed"
                        onAccept={() => console.log('Accepted')}
                        onDecline={() => console.log('Declined')}
                      />
                    </div>
                    <p className="text-xs text-stone-500 mt-4">
                      * Shown here with <code>fixed=false</code> for demonstration. Default is fixed to viewport bottom.
                    </p>
                    <details className="mt-4">
                      <summary className="cursor-pointer font-semibold text-stone-700 hover:text-emerald-700 text-sm">View Code</summary>
                      <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-xs overflow-x-auto mt-2 whitespace-pre">
                        {`import { CookieConsent } from '@eventyr-dev/eventyr-design';

<CookieConsent 
  variant="detailed"
  fixed={true}
  onAccept={() => console.log('Accepted')}
  onDecline={() => console.log('Declined')}
  privacyPolicyUrl="/privacy"
/>`}
                      </div>
                    </details>
                  </Card>

                  {/* Layout Primitives */}
                  <Card className="col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-stone-700 border-b pb-2 border-stone-100 mb-6">Layout & Primitives</h3>
                    <p className="text-sm text-stone-600 mb-6">Structural components for arranging and organizing content.</p>

                    <div className="space-y-8">
                      {/* Box */}
                      <div>
                        <h4 className="text-sm font-bold text-stone-700 mb-3">Box - Basic Wrapper</h4>
                        <div className="flex gap-4 flex-wrap">
                          <Box padding="sm" bg="stone" className="border border-stone-300 rounded">
                            <p className="text-xs text-stone-700">padding="sm"</p>
                          </Box>
                          <Box padding="md" bg="emerald" className="border border-emerald-300 rounded">
                            <p className="text-xs text-emerald-700">padding="md"</p>
                          </Box>
                          <Box padding="lg" bg="white" className="border border-stone-300 rounded shadow-sm">
                            <p className="text-xs text-stone-700">padding="lg"</p>
                          </Box>
                        </div>
                        <details className="mt-3">
                          <summary className="cursor-pointer text-xs text-stone-600 hover:text-emerald-700">View Code</summary>
                          <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs overflow-x-auto mt-2">
                            {`import { Box } from '@eventyr-dev/eventyr-design';

<Box padding="md" bg="stone">Content</Box>`}
                          </div>
                        </details>
                      </div>

                      {/* Container */}
                      <div>
                        <h4 className="text-sm font-bold text-stone-700 mb-3">Container - Max Width Control</h4>
                        <div className="bg-stone-100 p-4 rounded overflow-hidden">
                          <Container maxWidth="md" className="bg-white p-4 rounded border border-stone-300">
                            <p className="text-xs text-stone-700 text-center">maxWidth="md" - Content is centered with responsive padding</p>
                          </Container>
                        </div>
                        <details className="mt-3">
                          <summary className="cursor-pointer text-xs text-stone-600 hover:text-emerald-700">View Code</summary>
                          <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs overflow-x-auto mt-2">
                            {`import { Container } from '@eventyr-dev/eventyr-design';

<Container maxWidth="lg">Content</Container>`}
                          </div>
                        </details>
                      </div>

                      {/* Stack */}
                      <div>
                        <h4 className="text-sm font-bold text-stone-700 mb-3">Stack - Flexbox Utility</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-stone-500 mb-2">Vertical (default)</p>
                            <Stack spacing="sm" className="bg-stone-100 p-3 rounded">
                              <div className="bg-emerald-600 text-white px-3 py-2 rounded text-xs">Item 1</div>
                              <div className="bg-emerald-600 text-white px-3 py-2 rounded text-xs">Item 2</div>
                              <div className="bg-emerald-600 text-white px-3 py-2 rounded text-xs">Item 3</div>
                            </Stack>
                          </div>
                          <div>
                            <p className="text-xs text-stone-500 mb-2">Horizontal</p>
                            <Stack direction="horizontal" spacing="sm" className="bg-stone-100 p-3 rounded">
                              <div className="bg-stone-600 text-white px-3 py-2 rounded text-xs">A</div>
                              <div className="bg-stone-600 text-white px-3 py-2 rounded text-xs">B</div>
                              <div className="bg-stone-600 text-white px-3 py-2 rounded text-xs">C</div>
                            </Stack>
                          </div>
                        </div>
                        <details className="mt-3">
                          <summary className="cursor-pointer text-xs text-stone-600 hover:text-emerald-700">View Code</summary>
                          <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs overflow-x-auto mt-2">
                            {`import { Stack } from '@eventyr-dev/eventyr-design';

<Stack spacing="md" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>`}
                          </div>
                        </details>
                      </div>

                      {/* Grid */}
                      <div>
                        <h4 className="text-sm font-bold text-stone-700 mb-3">Grid - Responsive Layout</h4>
                        <Grid cols={12} gap="md" className="bg-stone-100 p-3 rounded">
                          <Col span={12} className="bg-emerald-600 text-white p-3 rounded text-xs text-center">12 columns</Col>
                          <Col span={6} className="bg-stone-600 text-white p-3 rounded text-xs text-center">6 cols</Col>
                          <Col span={6} className="bg-stone-600 text-white p-3 rounded text-xs text-center">6 cols</Col>
                          <Col span={4} className="bg-emerald-700 text-white p-3 rounded text-xs text-center">4</Col>
                          <Col span={4} className="bg-emerald-700 text-white p-3 rounded text-xs text-center">4</Col>
                          <Col span={4} className="bg-emerald-700 text-white p-3 rounded text-xs text-center">4</Col>
                        </Grid>
                        <details className="mt-3">
                          <summary className="cursor-pointer text-xs text-stone-600 hover:text-emerald-700">View Code</summary>
                          <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs overflow-x-auto mt-2">
                            {`import { Grid, Col } from '@eventyr-dev/eventyr-design';

<Grid cols={12} gap="md">
  <Col span={8}>Main</Col>
  <Col span={4}>Sidebar</Col>
</Grid>`}
                          </div>
                        </details>
                      </div>

                      {/* Divider */}
                      <div>
                        <h4 className="text-sm font-bold text-stone-700 mb-3">Divider - Section Separator</h4>
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs text-stone-500 mb-2">Horizontal (default)</p>
                            <div className="bg-stone-100 p-4 rounded">
                              <p className="text-xs text-stone-700">Section 1</p>
                              <Divider className="my-3" />
                              <p className="text-xs text-stone-700">Section 2</p>
                              <Divider thickness="medium" color="emerald" className="my-3" />
                              <p className="text-xs text-stone-700">Section 3</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-stone-500 mb-2">Vertical</p>
                            <div className="bg-stone-100 p-4 rounded flex items-center gap-4 h-20">
                              <div className="text-xs text-stone-700">Left</div>
                              <Divider orientation="vertical" />
                              <div className="text-xs text-stone-700">Middle</div>
                              <Divider orientation="vertical" thickness="thick" color="dark" />
                              <div className="text-xs text-stone-700">Right</div>
                            </div>
                          </div>
                        </div>
                        <details className="mt-3">
                          <summary className="cursor-pointer text-xs text-stone-600 hover:text-emerald-700">View Code</summary>
                          <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-xs overflow-x-auto mt-2">
                            {`import { Divider } from '@eventyr-dev/eventyr-design';

<Divider />
<Divider orientation="vertical" thickness="medium" />
<Divider color="emerald" />`}
                          </div>
                        </details>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* USAGE SECTION */}
            {activeTab === 'usage' && (
              <div className="animate-fadeIn">
                <SectionHeader
                  title="Getting Started"
                  description="How to install and integrate Nordic UI into your project."
                  icon={Terminal}
                />

                <div className="space-y-8">
                  <Card>
                    <h3 className="font-semibold text-stone-700 mb-4">1. Installation</h3>
                    <p className="text-stone-600 mb-4 text-sm">
                      Create an <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800 font-mono">.npmrc</code> file in your project root to point to the GitHub Package Registry:
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                      @eventyr-dev:registry=https://npm.pkg.github.com
                    </div>
                    <p className="text-stone-600 mb-4 text-sm">
                      Then install the package:
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      npm install @eventyr-dev/eventyr-design@0.0.1 lucide-react
                    </div>
                  </Card>

                  <Card>
                    <h3 className="font-semibold text-stone-700 mb-4">2. Configuration</h3>
                    <p className="text-stone-600 mb-4">
                      Add the library to your <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800 font-mono text-sm">tailwind.config.js</code> content array to ensure styles are generated.
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre">
                      {`export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@eventyr-dev/eventyr-design/dist/**/*.{js,ts,jsx,tsx}"
  ],
  // ... rest of config
}`}
                    </div>
                  </Card>

                  <Card>
                    <h3 className="font-semibold text-stone-700 mb-4">3. Usage</h3>
                    <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre">
                      {`import { Button, Card } from '@eventyr-dev/eventyr-design';
import { ArrowRight } from 'lucide-react';

function MyComponent() {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Hello World</h2>
      <Button variant="primary" icon={ArrowRight}>
        Get Started
      </Button>
    </Card>
  );
}`}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* LAYOUT EXAMPLE */}
            {activeTab === 'layout' && (
              <div className="animate-fadeIn">
                <SectionHeader
                  title="Layout Application"
                  description="How these elements come together in a real interface. Notice the generous whitespace (padding-6 or 8) and limited color palette."
                  icon={Mountain}
                />

                <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200">
                  {/* Mock Navbar */}
                  <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-stone-800 font-bold">
                      <div className="bg-stone-800 text-white p-1 rounded">
                        <Leaf size={16} />
                      </div>
                      App Logo
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
                      <span className="text-stone-900">Dashboard</span>
                      <span className="hover:text-stone-900 cursor-pointer">Projects</span>
                      <span className="hover:text-stone-900 cursor-pointer">Team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" className="!p-2">
                        <Bell size={20} />
                      </Button>
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 border border-emerald-200">
                        <User size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Mock Content */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                      <Card>
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="font-bold text-xl text-stone-800">Active Projects</h3>
                          <Button variant="outline" className="!py-2 !px-4 text-sm">Filter</Button>
                        </div>

                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 hover:bg-stone-50 rounded-lg transition-colors border border-transparent hover:border-stone-100 cursor-pointer">
                              <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 1 ? 'bg-stone-800 text-white' : 'bg-stone-200 text-stone-600'}`}>
                                  <Mountain size={20} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-stone-800">Nordic Redesign Phase {i}</h4>
                                  <p className="text-xs text-stone-500">Updated 2 hours ago</p>
                                </div>
                              </div>
                              <Badge variant={i === 1 ? 'success' : 'neutral'}>
                                {i === 1 ? 'Active' : 'Paused'}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    <div className="space-y-6">
                      <Card className="!bg-stone-800 !text-white !border-stone-700">
                        <h3 className="font-bold mb-2">Pro Plan</h3>
                        <p className="text-stone-400 text-sm mb-6">Upgrade your workspace to unlock more nature-inspired themes.</p>
                        <Button variant="secondary" className="w-full justify-center">Upgrade Now</Button>
                      </Card>

                      <Card>
                        <h3 className="font-bold text-stone-800 mb-4">Team Members</h3>
                        <div className="flex -space-x-2 overflow-hidden mb-4">
                          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-stone-300"></div>
                          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-stone-400"></div>
                          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-stone-500"></div>
                          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-stone-600 flex items-center justify-center text-xs text-white font-medium">+3</div>
                        </div>
                        <Button variant="ghost" className="w-full text-sm justify-between px-0 hover:bg-transparent hover:text-emerald-700">
                          Manage Team <ArrowRight size={16} />
                        </Button>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}