import React, { useState } from 'react'
import { toast } from 'sonner'

// Currently installed components
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Icons from lucide-react
import {
    Menu,
    Moon,
    Sun,
    ChevronDown,
    Star,
    Heart,
    Share,
    Settings,
    User,
    Bell,
    Search,
    Plus,
    Minus,
    Play,
    Pause,
    SkipForward,
    Volume2,
    Wifi,
    Battery,
    Signal,
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    Phone,
    Mail,
    Camera,
    Image,
    Video,
    Music,
    Download,
    Upload,
    Edit,
    Trash2,
    Copy,
    Check,
    X,
    AlertCircle,
    Info,
    CheckCircle,
    XCircle,
    Palette,
    Eye,
} from 'lucide-react'

export default function SamplePage() {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark')
    }

    const showToast = (type) => {
        switch (type) {
            case 'success':
                toast.success('Success! Operation completed successfully.')
                break
            case 'error':
                toast.error('Error! Something went wrong.')
                break
            case 'info':
                toast.info('Info: Here\'s some information for you.')
                break
            default:
                toast('Default toast message')
        }
    }

    // Color showcase data
    const colorFamilies = [
        {
            name: 'Merlin Blue',
            description: 'Primary brand color',
            css: 'merlin-blue',
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        {
            name: 'Merlin Grey',
            description: 'Neutral colors for text and backgrounds',
            css: 'merlin-grey',
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        {
            name: 'Merlin Slate',
            description: 'Information and info states',
            css: 'merlin-slate',
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        {
            name: 'Merlin Green',
            description: 'Success states and positive actions',
            css: 'merlin-green',
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        {
            name: 'Merlin Amber',
            description: 'Warning states and caution',
            css: 'merlin-amber',
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        {
            name: 'Merlin Red',
            description: 'Error states and destructive actions',
            css: 'merlin-red',
            shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    ]

    const semanticTokens = [
        { name: 'Primary Text', token: 'text-primary', description: 'Main text content' },
        { name: 'Secondary Text', token: 'text-secondary', description: 'Supporting text' },
        { name: 'Placeholder Text', token: 'text-placeholder', description: 'Form placeholders and hints' },
        { name: 'Disabled Text', token: 'text-disabled', description: 'Disabled state text' },
        { name: 'Inverse Text', token: 'text-inverse', description: 'Text on dark backgrounds' },
        { name: 'Helper Text', token: 'text-helper', description: 'Tertiary and helper text' },
    ]

    const backgroundTokens = [
        { name: 'Primary Background', token: 'background-primary', description: 'Main page background' },
        { name: 'Secondary Background', token: 'background-secondary', description: 'Card and section backgrounds' },
        { name: 'Disabled Background', token: 'background-disabled', description: 'Disabled element backgrounds' },
    ]

    return (
        <div className={`min-h-screen ${isDark ? 'dark' : ''}`} style={{ backgroundColor: 'var(--color-background-primary)' }}>
            {/* Mobile Header */}
            <header className="sticky top-0 z-50 w-full border-b backdrop-blur" style={{ backgroundColor: 'var(--color-background-primary)' }}>
                <div className="container flex h-14 items-center justify-between px-4">
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                        <h1 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>Merlin Color System</h1>
                    </div>
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 space-y-8">

                {/* Hero Section */}
                <section className="text-center space-y-4 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
                    <div className="flex justify-center mb-4">
                        <Palette className="h-12 w-12" style={{ color: 'var(--color-merlin-blue-500)' }} />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--color-text-primary)' }}>
                        Merlin Design System
                    </h2>
                    <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                        A comprehensive color system with semantic tokens for consistent design.
                        Explore all color families and their usage patterns.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Button size="lg" onClick={() => showToast('success')} style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                            <Play className="mr-2 h-4 w-4" />
                            Explore Colors
                        </Button>
                        <Button variant="outline" size="lg" style={{ borderColor: 'var(--color-merlin-blue-500)', color: 'var(--color-merlin-blue-500)' }}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Tokens
                        </Button>
                    </div>
                </section>

                {/* Semantic Text Tokens */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Text Semantic Tokens</h3>
                    <div className="grid gap-4">
                        {semanticTokens.map((token) => (
                            <div key={token.token} className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--color-background-secondary)', borderColor: 'var(--color-merlin-grey-200)' }}>
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{token.name}</h4>
                                    <code className="text-sm px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-merlin-grey-100)', color: 'var(--color-text-secondary)' }}>
                                        --color-{token.token}
                                    </code>
                                </div>
                                <p style={{ color: `var(--color-${token.token})` }} className="text-lg">
                                    {token.description} - This is how this token looks in practice.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Background Semantic Tokens */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Background Semantic Tokens</h3>
                    <div className="grid gap-4">
                        {backgroundTokens.map((token) => (
                            <div key={token.token} className="p-6 rounded-lg border" style={{ backgroundColor: `var(--color-${token.token})`, borderColor: 'var(--color-merlin-grey-200)' }}>
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{token.name}</h4>
                                    <code className="text-sm px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-merlin-grey-100)', color: 'var(--color-text-secondary)' }}>
                                        --color-{token.token}
                                    </code>
                                </div>
                                <p style={{ color: 'var(--color-text-secondary)' }}>
                                    {token.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Color Families Showcase */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Color Families</h3>
                    {colorFamilies.map((family) => (
                        <div key={family.css} className="space-y-3">
                            <div>
                                <h4 className="text-xl font-medium" style={{ color: 'var(--color-text-primary)' }}>{family.name}</h4>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{family.description}</p>
                            </div>
                            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                                {family.shades.map((shade) => (
                                    <div key={shade} className="text-center">
                                        <div 
                                            className="w-full h-16 rounded-lg border mb-2 flex items-center justify-center text-sm font-medium shadow-sm"
                                            style={{ 
                                                backgroundColor: `var(--color-${family.css}-${shade})`,
                                                borderColor: 'var(--color-merlin-grey-300)',
                                                color: 'var(--color-merlin-black)'
                                            }}
                                        >
                                            {shade}
                                        </div>
                                        <code className="text-xs" style={{ color: 'var(--color-text-helper)' }}>
                                            {shade}
                                        </code>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Special Colors */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Special Colors</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-6 rounded-lg flex items-center justify-between" style={{ backgroundColor: 'var(--color-merlin-black)' }}>
                            <span className="text-lg font-medium" style={{ color: 'var(--color-merlin-white)' }}>Merlin Black</span>
                            <code className="text-sm px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-merlin-grey-800)', color: 'var(--color-merlin-white)' }}>
                                --color-merlin-black
                            </code>
                        </div>
                        <div className="p-6 rounded-lg border flex items-center justify-between" style={{ backgroundColor: 'var(--color-merlin-white)', borderColor: 'var(--color-merlin-grey-200)' }}>
                            <span className="text-lg font-medium" style={{ color: 'var(--color-merlin-black)' }}>Merlin White</span>
                            <code className="text-sm px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-merlin-grey-100)', color: 'var(--color-merlin-black)' }}>
                                --color-merlin-white
                            </code>
                        </div>
                    </div>
                </section>

                {/* Button Variants with Merlin Colors */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Button Examples with Merlin Colors</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        <Button style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                            Primary Blue
                        </Button>
                        <Button style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Success
                        </Button>
                        <Button style={{ backgroundColor: 'var(--color-merlin-amber-500)', color: 'white' }}>
                            <AlertCircle className="mr-2 h-4 w-4" />
                            Warning
                        </Button>
                        <Button style={{ backgroundColor: 'var(--color-merlin-red-500)', color: 'white' }}>
                            <XCircle className="mr-2 h-4 w-4" />
                            Danger
                        </Button>
                        <Button variant="outline" style={{ borderColor: 'var(--color-merlin-slate-500)', color: 'var(--color-merlin-slate-500)' }}>
                            <Info className="mr-2 h-4 w-4" />
                            Info
                        </Button>
                        <Button variant="ghost" style={{ color: 'var(--color-merlin-grey-600)' }}>
                            Secondary
                        </Button>
                        <Button disabled style={{ backgroundColor: 'var(--color-background-disabled)', color: 'var(--color-text-disabled)' }}>
                            Disabled
                        </Button>
                        <Button style={{ backgroundColor: 'var(--color-merlin-black)', color: 'var(--color-merlin-white)' }}>
                            Dark Theme
                        </Button>
                    </div>
                </section>

                {/* Toast Demo Section with Color Context */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Toast Notifications</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <Button onClick={() => showToast('default')} style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                            Default Toast
                        </Button>
                        <Button onClick={() => showToast('success')} style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Success
                        </Button>
                        <Button onClick={() => showToast('error')} style={{ backgroundColor: 'var(--color-merlin-red-500)', color: 'white' }}>
                            <XCircle className="mr-2 h-4 w-4" />
                            Error
                        </Button>
                        <Button onClick={() => showToast('info')} style={{ backgroundColor: 'var(--color-merlin-slate-500)', color: 'white' }}>
                            <Info className="mr-2 h-4 w-4" />
                            Info
                        </Button>
                    </div>
                </section>

                {/* Accordion with Custom Colors */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Accordion with Merlin Colors</h3>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" style={{ borderColor: 'var(--color-merlin-grey-200)' }}>
                            <AccordionTrigger style={{ color: 'var(--color-text-primary)' }}>
                                Color System Benefits
                            </AccordionTrigger>
                            <AccordionContent style={{ color: 'var(--color-text-secondary)' }}>
                                Semantic color tokens provide consistency, maintainability, and easy theming across your entire application.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" style={{ borderColor: 'var(--color-merlin-grey-200)' }}>
                            <AccordionTrigger style={{ color: 'var(--color-text-primary)' }}>
                                Design Token Structure
                            </AccordionTrigger>
                            <AccordionContent style={{ color: 'var(--color-text-secondary)' }}>
                                Tokens are organized into raw color values and semantic usage patterns for maximum flexibility.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" style={{ borderColor: 'var(--color-merlin-grey-200)' }}>
                            <AccordionTrigger style={{ color: 'var(--color-text-primary)' }}>
                                Implementation Guide
                            </AccordionTrigger>
                            <AccordionContent style={{ color: 'var(--color-text-secondary)' }}>
                                Use semantic tokens in your components and raw color values only when building new semantic patterns.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* Footer */}
                <footer className="text-center py-8" style={{ color: 'var(--color-text-helper)' }}>
                    <p>Merlin Design System • Color Tokens Showcase</p>
                    <p className="text-sm mt-2">
                        Built with semantic color tokens for consistent theming
                    </p>
                </footer>
            </main>
        </div>
    )
}
