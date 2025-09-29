import React, { useState } from 'react'
import { toast } from 'sonner'

// All shadcn/ui components
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Calendar } from "@/components/ui/calendar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

// Icons from lucide-react
import {
    Menu,
    Moon,
    Sun,
    Star,
    Heart,
    Share,
    Settings,
    User,
    Bell,
    Search,
    Plus,
    Home,
    Download,
    Upload,
    Edit,
    Trash2,
    Check,
    X,
    AlertCircle,
    Info,
    CheckCircle,
    XCircle,
    Palette,
    Eye,
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    Phone,
    Mail,
    Camera,
    Shield,
    Zap,
    Globe,
    ChevronRight,
    ExternalLink,
    Filter,
    SortAsc,
} from 'lucide-react'

export default function SamplePage() {
    const [isDark, setIsDark] = useState(false)
    const [progress, setProgress] = useState(33)
    const [sliderValue, setSliderValue] = useState([50])
    const [isSheetOpen, setIsSheetOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

    const toggleTheme = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark')
    }

    const showToast = (type: string) => {
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

    const carouselItems = [
        { id: 1, title: "Beautiful Carousel", description: "Showcase your content with style", color: "var(--color-merlin-blue-500)" },
        { id: 2, title: "Interactive Design", description: "Engage your users with smooth animations", color: "var(--color-merlin-green-500)" },
        { id: 3, title: "Responsive Layout", description: "Works perfectly on all devices", color: "var(--color-merlin-amber-500)" },
        { id: 4, title: "Merlin Colors", description: "Using the beautiful Merlin color palette", color: "var(--color-merlin-red-500)" },
    ]

    return (
        <TooltipProvider>
            <div className={`min-h-screen ${isDark ? 'dark' : ''}`} style={{ backgroundColor: 'var(--color-background-primary)' }}>
                
                {/* Header with Menubar */}
                <header className="sticky top-0 z-50 w-full border-b backdrop-blur" style={{ backgroundColor: 'var(--color-background-primary)', borderColor: 'var(--color-merlin-grey-200)' }}>
                    {/* Top Header Bar */}
                    <div className="flex h-14 items-center justify-between px-4">
                        <div className="flex items-center space-x-4">
                            {/* Mobile Menu Button */}
                            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="md:hidden">
                                        <Menu className="h-5 w-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-80">
                                    <SheetHeader>
                                        <SheetTitle>Navigation</SheetTitle>
                                        <SheetDescription>
                                            Access all sections and features
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="py-4 space-y-4">
                                        <div className="space-y-2">
                                            <Button variant="ghost" className="w-full justify-start">
                                                <Home className="mr-2 h-4 w-4" />
                                                Home
                                            </Button>
                                            <Button variant="ghost" className="w-full justify-start">
                                                <Palette className="mr-2 h-4 w-4" />
                                                Colors
                                            </Button>
                                            <Button variant="ghost" className="w-full justify-start">
                                                <Settings className="mr-2 h-4 w-4" />
                                                Components
                                            </Button>
                                            <Button variant="ghost" className="w-full justify-start">
                                                <User className="mr-2 h-4 w-4" />
                                                Profile
                                            </Button>
                                        </div>
                                    </div>
                                    <SheetFooter>
                                        <SheetClose asChild>
                                            <Button>Close Menu</Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>

                            {/* Logo and Title */}
                            <div className="flex items-center space-x-2">
                                <Palette className="h-6 w-6" style={{ color: 'var(--color-merlin-blue-500)' }} />
                                <h1 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                                    Merlin Design System
                                </h1>
                            </div>
                        </div>

                        {/* Header Actions */}
                        <div className="flex items-center space-x-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Search className="h-5 w-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Search components</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Bell className="h-5 w-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Notifications</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Toggle theme</p>
                                </TooltipContent>
                            </Tooltip>

                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                <AvatarFallback>US</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* Menubar */}
                    <div className="hidden md:block border-t" style={{ borderColor: 'var(--color-merlin-grey-200)' }}>
                        <Menubar className="rounded-none border-none h-12">
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        New Project <MenubarShortcut>⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Open <MenubarShortcut>⌘O</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        Save <MenubarShortcut>⌘S</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Export <MenubarShortcut>⌘E</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Edit</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Cut</MenubarItem>
                                    <MenubarItem>Copy</MenubarItem>
                                    <MenubarItem>Paste</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>View</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarCheckboxItem checked>
                                        Show Sidebar
                                    </MenubarCheckboxItem>
                                    <MenubarCheckboxItem>
                                        Show Toolbar
                                    </MenubarCheckboxItem>
                                    <MenubarSeparator />
                                    <MenubarRadioGroup value="light">
                                        <MenubarRadioItem value="light">
                                            Light Theme
                                        </MenubarRadioItem>
                                        <MenubarRadioItem value="dark">
                                            Dark Theme
                                        </MenubarRadioItem>
                                        <MenubarRadioItem value="system">
                                            System Theme
                                        </MenubarRadioItem>
                                    </MenubarRadioGroup>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Components</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>Forms</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Input</MenubarItem>
                                            <MenubarItem>Select</MenubarItem>
                                            <MenubarItem>Checkbox</MenubarItem>
                                            <MenubarItem>Radio Group</MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSub>
                                        <MenubarSubTrigger>Navigation</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Tabs</MenubarItem>
                                            <MenubarItem>Breadcrumb</MenubarItem>
                                            <MenubarItem>Pagination</MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>Cards</MenubarItem>
                                    <MenubarItem>Carousel</MenubarItem>
                                    <MenubarItem>Tables</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Help</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Documentation <MenubarShortcut>⌘?</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>Keyboard Shortcuts</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>About</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </header>

                {/* Breadcrumb Navigation */}
                <div className="container mx-auto px-4 py-2">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Showcase</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6 space-y-8">

                    {/* Hero Section with Cards */}
                    <section className="space-y-6">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-bold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                                Complete Component Showcase
                            </h2>
                            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                                Explore all shadcn/ui components with the Merlin Design System colors and tokens.
                            </p>
                        </div>

                        {/* Hero Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Palette className="h-6 w-6" style={{ color: 'var(--color-merlin-blue-500)' }} />
                                        <CardTitle>Design System</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Comprehensive color tokens and semantic design patterns
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex space-x-2">
                                        <Badge style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>Colors</Badge>
                                        <Badge variant="outline">Tokens</Badge>
                                        <Badge variant="secondary">Semantic</Badge>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                                        Explore Colors
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Settings className="h-6 w-6" style={{ color: 'var(--color-merlin-green-500)' }} />
                                        <CardTitle>Components</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Complete library of UI components with examples
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex space-x-2">
                                        <Badge style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>Forms</Badge>
                                        <Badge variant="outline">Navigation</Badge>
                                        <Badge variant="secondary">Overlays</Badge>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>
                                        View Components
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Zap className="h-6 w-6" style={{ color: 'var(--color-merlin-amber-500)' }} />
                                        <CardTitle>Interactive</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Live examples and interactive demonstrations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex space-x-2">
                                        <Badge style={{ backgroundColor: 'var(--color-merlin-amber-500)', color: 'white' }}>Live</Badge>
                                        <Badge variant="outline">Examples</Badge>
                                        <Badge variant="secondary">Interactive</Badge>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" style={{ backgroundColor: 'var(--color-merlin-amber-500)', color: 'white' }}>
                                        Try Examples
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </section>

                    {/* Carousel Section */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Carousel</h3>
                        <Card>
                            <CardContent className="p-6">
                                <Carousel className="w-full max-w-xs mx-auto">
                                    <CarouselContent>
                                        {carouselItems.map((item) => (
                                            <CarouselItem key={item.id}>
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-6" style={{ backgroundColor: item.color }}>
                                                        <div className="text-center text-white">
                                                            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                                            <p className="text-sm opacity-90">{item.description}</p>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Forms Section */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Form Components</h3>
                        <Card>
                            <CardHeader>
                                <CardTitle>Complete Form Example</CardTitle>
                                <CardDescription>All form components in action</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Input Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="Enter your email" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" placeholder="Enter password" type="password" />
                                    </div>
                                </div>

                                {/* Select */}
                                <div className="space-y-2">
                                    <Label>Select Option</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="option1">Option 1</SelectItem>
                                            <SelectItem value="option2">Option 2</SelectItem>
                                            <SelectItem value="option3">Option 3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Checkboxes and Radio */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <Label>Preferences</Label>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="newsletter" />
                                                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="notifications" />
                                                <Label htmlFor="notifications">Enable notifications</Label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label>Theme Preference</Label>
                                        <RadioGroup defaultValue="light">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="light" id="light" />
                                                <Label htmlFor="light">Light</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="dark" id="dark" />
                                                <Label htmlFor="dark">Dark</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>

                                {/* Switch and Slider */}
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Switch id="airplane-mode" />
                                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <Label>Volume: {sliderValue[0]}</Label>
                                        <Slider
                                            value={sliderValue}
                                            onValueChange={setSliderValue}
                                            max={100}
                                            step={1}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                                    Submit Form
                                </Button>
                            </CardFooter>
                        </Card>
                    </section>

                    {/* Alerts and Feedback */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Feedback Components</h3>
                        
                        {/* Alerts */}
                        <div className="space-y-4">
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>Info</AlertTitle>
                                <AlertDescription>
                                    This is an informational message with important details.
                                </AlertDescription>
                            </Alert>
                            <Alert style={{ borderColor: 'var(--color-merlin-green-500)', color: 'var(--color-merlin-green-700)' }}>
                                <CheckCircle className="h-4 w-4" style={{ color: 'var(--color-merlin-green-500)' }} />
                                <AlertTitle>Success</AlertTitle>
                                <AlertDescription>
                                    Your operation completed successfully!
                                </AlertDescription>
                            </Alert>
                            <Alert style={{ borderColor: 'var(--color-merlin-amber-500)', color: 'var(--color-merlin-amber-700)' }}>
                                <AlertCircle className="h-4 w-4" style={{ color: 'var(--color-merlin-amber-500)' }} />
                                <AlertTitle>Warning</AlertTitle>
                                <AlertDescription>
                                    Please review this information before proceeding.
                                </AlertDescription>
                            </Alert>
                            <Alert style={{ borderColor: 'var(--color-merlin-red-500)', color: 'var(--color-merlin-red-700)' }}>
                                <XCircle className="h-4 w-4" style={{ color: 'var(--color-merlin-red-500)' }} />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    An error occurred while processing your request.
                                </AlertDescription>
                            </Alert>
                        </div>

                        {/* Progress and Skeletons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Progress</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Upload Progress</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <Progress value={progress} />
                                    </div>
                                    <Button 
                                        onClick={() => setProgress(Math.min(100, progress + 10))}
                                        style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}
                                    >
                                        Increase
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Loading States</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <Skeleton className="h-12 w-12 rounded-full" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-[200px]" />
                                            <Skeleton className="h-4 w-[160px]" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Toast Buttons */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Toast Notifications</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    <Button onClick={() => showToast('default')} style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                                        Default
                                    </Button>
                                    <Button onClick={() => showToast('success')} style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>
                                        Success
                                    </Button>
                                    <Button onClick={() => showToast('error')} style={{ backgroundColor: 'var(--color-merlin-red-500)', color: 'white' }}>
                                        Error
                                    </Button>
                                    <Button onClick={() => showToast('info')} style={{ backgroundColor: 'var(--color-merlin-slate-500)', color: 'white' }}>
                                        Info
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Overlays and Dialogs */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Overlays & Dialogs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            
                            {/* Dialog */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Dialog</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                                                Open Dialog
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Confirm Action</DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone. Continue?
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <Button variant="outline">Cancel</Button>
                                                <Button style={{ backgroundColor: 'var(--color-merlin-red-500)', color: 'white' }}>
                                                    Confirm
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>

                            {/* Alert Dialog */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Alert Dialog</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button style={{ backgroundColor: 'var(--color-merlin-red-500)', color: 'white' }}>
                                                Delete
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This will permanently delete the item.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction style={{ backgroundColor: 'var(--color-merlin-red-500)', color: 'white' }}>
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </CardContent>
                            </Card>

                            {/* Popover */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Popover</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline">Settings</Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-80">
                                            <div className="space-y-4">
                                                <h4 className="font-medium">Settings</h4>
                                                <div className="grid gap-2">
                                                    <Label htmlFor="width">Width</Label>
                                                    <Input id="width" defaultValue="100%" />
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </CardContent>
                            </Card>

                            {/* Hover Card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Hover Card</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <Button variant="link">@shadcn</Button>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-80">
                                            <div className="flex space-x-4">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>SC</AvatarFallback>
                                                </Avatar>
                                                <div className="space-y-1">
                                                    <h4 className="text-sm font-semibold">@shadcn</h4>
                                                    <p className="text-sm">Creator of shadcn/ui</p>
                                                </div>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Data Display */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Data Display</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            
                            {/* Table */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Table</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableCaption>Recent users</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Role</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>John Doe</TableCell>
                                                <TableCell>
                                                    <Badge style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>Active</Badge>
                                                </TableCell>
                                                <TableCell>Admin</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Jane Smith</TableCell>
                                                <TableCell>
                                                    <Badge style={{ backgroundColor: 'var(--color-merlin-amber-500)', color: 'white' }}>Pending</Badge>
                                                </TableCell>
                                                <TableCell>User</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>

                            {/* Calendar */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Calendar</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={setSelectedDate}
                                        className="rounded-md border"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Navigation Menu */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Navigation Menu</h3>
                        <Card>
                            <CardContent className="p-6">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                    <div className="row-span-3">
                                                        <NavigationMenuLink asChild>
                                                            <a
                                                                className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                                                                style={{ backgroundColor: 'var(--color-merlin-blue-500)' }}
                                                                href="/"
                                                            >
                                                                <Palette className="h-6 w-6 text-white" />
                                                                <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                                    Merlin Design System
                                                                </div>
                                                                <p className="text-sm leading-tight text-white/90">
                                                                    Beautiful components built with Radix UI and Tailwind CSS.
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </div>
                                                    <div className="grid gap-1">
                                                        <NavigationMenuLink asChild>
                                                            <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">Introduction</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                    Re-usable components built using Radix UI and Tailwind CSS.
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">Installation</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                    How to install dependencies and structure your app.
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">Typography</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                    Styles for headings, paragraphs, lists...etc
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    <NavigationMenuLink asChild>
                                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">Alert Dialog</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                A modal dialog that interrupts the user with important content.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                    <NavigationMenuLink asChild>
                                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">Hover Card</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                For sighted users to preview content available behind a link.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                    <NavigationMenuLink asChild>
                                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">Progress</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Displays an indicator showing the completion progress.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                    <NavigationMenuLink asChild>
                                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">Scroll-area</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                Visually or semantically separates content.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                    <NavigationMenuLink asChild>
                                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">Tabs</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                A set of layered sections of content.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                    <NavigationMenuLink asChild>
                                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                            <div className="text-sm font-medium leading-none">Tooltip</div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                A popup that displays information related to an element.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                                Documentation
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Separator Examples */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Separators</h3>
                        <Card>
                            <CardHeader>
                                <CardTitle>Content Separation</CardTitle>
                                <CardDescription>Visual and semantic content separators</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-medium leading-none" style={{ color: 'var(--color-text-primary)' }}>Horizontal Separator</h4>
                                    <p className="text-sm text-muted-foreground mt-2 mb-4">
                                        This is some content above the separator.
                                    </p>
                                    <Separator />
                                    <p className="text-sm text-muted-foreground mt-4">
                                        This is some content below the separator.
                                    </p>
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-medium leading-none mb-4" style={{ color: 'var(--color-text-primary)' }}>Vertical Separator in Flex Layout</h4>
                                    <div className="flex h-20 items-center space-x-4 text-sm">
                                        <div>Blog</div>
                                        <Separator orientation="vertical" />
                                        <div>Docs</div>
                                        <Separator orientation="vertical" />
                                        <div>Source</div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium leading-none mb-4" style={{ color: 'var(--color-text-primary)' }}>Separator in Lists</h4>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-medium leading-none">Settings</h4>
                                        <p className="text-sm text-muted-foreground">Manage your account settings.</p>
                                        <Separator className="my-4" />
                                        <h4 className="text-sm font-medium leading-none">Profile</h4>
                                        <p className="text-sm text-muted-foreground">Update your profile information.</p>
                                        <Separator className="my-4" />
                                        <h4 className="text-sm font-medium leading-none">Notifications</h4>
                                        <p className="text-sm text-muted-foreground">Configure notification preferences.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Pagination */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Pagination</h3>
                        <Card>
                            <CardContent className="p-6">
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#" isActive>1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext href="#" />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </CardContent>
                        </Card>
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
                                                    color: shade >= 500 ? 'white' : 'var(--color-merlin-black)'
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

                    {/* Icon Showcase & Features */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Icon Buttons & Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {/* Social Actions */}
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Heart className="h-5 w-5" style={{ color: 'var(--color-merlin-red-500)' }} />
                                        <CardTitle className="text-lg">Social Actions</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="sm">
                                            <Heart className="h-4 w-4 mr-2" />
                                            Like
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Star className="h-4 w-4 mr-2" />
                                            Star
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Share className="h-4 w-4 mr-2" />
                                            Share
                                        </Button>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button size="sm" style={{ backgroundColor: 'var(--color-merlin-red-500)', color: 'white' }}>
                                            <Heart className="h-4 w-4 mr-2" />
                                            Liked
                                        </Button>
                                        <Button size="sm" style={{ backgroundColor: 'var(--color-merlin-amber-500)', color: 'white' }}>
                                            <Star className="h-4 w-4 mr-2" />
                                            Starred
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Contact Info */}
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Phone className="h-5 w-5" style={{ color: 'var(--color-merlin-blue-500)' }} />
                                        <CardTitle className="text-lg">Contact Info</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-4 w-4" style={{ color: 'var(--color-merlin-blue-500)' }} />
                                        <span className="text-sm">+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail className="h-4 w-4" style={{ color: 'var(--color-merlin-green-500)' }} />
                                        <span className="text-sm">contact@example.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="h-4 w-4" style={{ color: 'var(--color-merlin-red-500)' }} />
                                        <span className="text-sm">San Francisco, CA</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Globe className="h-4 w-4" style={{ color: 'var(--color-merlin-slate-500)' }} />
                                        <span className="text-sm">www.example.com</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* System Status */}
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Shield className="h-5 w-5" style={{ color: 'var(--color-merlin-green-500)' }} />
                                        <CardTitle className="text-lg">System Status</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Shield className="h-4 w-4" style={{ color: 'var(--color-merlin-green-500)' }} />
                                            <span className="text-sm">Security</span>
                                        </div>
                                        <Badge style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>
                                            Active
                                        </Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-4 w-4" style={{ color: 'var(--color-merlin-blue-500)' }} />
                                            <span className="text-sm">Uptime</span>
                                        </div>
                                        <Badge variant="outline">99.9%</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Camera className="h-4 w-4" style={{ color: 'var(--color-merlin-amber-500)' }} />
                                            <span className="text-sm">Monitoring</span>
                                        </div>
                                        <Badge style={{ backgroundColor: 'var(--color-merlin-amber-500)', color: 'white' }}>
                                            Running
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Table with Actions */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Advanced Table with Actions</h3>
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle>User Management</CardTitle>
                                        <CardDescription>Manage users with various actions and filters</CardDescription>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="sm">
                                            <Filter className="h-4 w-4 mr-2" />
                                            Filter
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <SortAsc className="h-4 w-4 mr-2" />
                                            Sort
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableCaption>List of users with management actions</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>User</TableHead>
                                            <TableHead>Contact</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <div className="flex items-center space-x-3">
                                                    <Avatar>
                                                        <AvatarFallback style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                                                            JD
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium">John Doe</p>
                                                        <p className="text-sm text-muted-foreground">Admin</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <Mail className="h-3 w-3 text-muted-foreground" />
                                                        <span className="text-xs">john@example.com</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Phone className="h-3 w-3 text-muted-foreground" />
                                                        <span className="text-xs">+1 (555) 123</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>
                                                    Active
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center space-x-2">
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" style={{ color: 'var(--color-merlin-red-500)' }}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="flex items-center space-x-3">
                                                    <Avatar>
                                                        <AvatarFallback style={{ backgroundColor: 'var(--color-merlin-green-500)', color: 'white' }}>
                                                            JS
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium">Jane Smith</p>
                                                        <p className="text-sm text-muted-foreground">Editor</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="flex items-center space-x-2">
                                                        <Mail className="h-3 w-3 text-muted-foreground" />
                                                        <span className="text-xs">jane@example.com</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Phone className="h-3 w-3 text-muted-foreground" />
                                                        <span className="text-xs">+1 (555) 456</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge style={{ backgroundColor: 'var(--color-merlin-amber-500)', color: 'white' }}>
                                                    Pending
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center space-x-2">
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="sm" style={{ color: 'var(--color-merlin-red-500)' }}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Accordion */}
                    <section className="space-y-4">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Accordion</h3>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is the Merlin Design System?</AccordionTrigger>
                                <AccordionContent>
                                    A comprehensive design system with semantic color tokens and UI components.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>How do I use the components?</AccordionTrigger>
                                <AccordionContent>
                                    Import the components and use them with Merlin color tokens for consistent theming.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it customizable?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Use CSS custom properties to easily customize colors and tokens.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Footer */}
                    <footer className="text-center py-8 border-t" style={{ color: 'var(--color-text-helper)', borderColor: 'var(--color-merlin-grey-200)' }}>
                        <div className="space-y-2">
                            <p className="text-lg font-medium" style={{ color: 'var(--color-text-primary)' }}>
                                Merlin Design System
                            </p>
                            <p>Complete component library with semantic color tokens</p>
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Badge variant="outline">shadcn/ui</Badge>
                                <Badge variant="outline">Tailwind CSS</Badge>
                                <Badge variant="outline">React</Badge>
                                <Badge style={{ backgroundColor: 'var(--color-merlin-blue-500)', color: 'white' }}>
                                    Merlin Colors
                                </Badge>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </TooltipProvider>
    )
}
