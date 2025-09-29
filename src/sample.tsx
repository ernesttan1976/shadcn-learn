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

// Uncomment these imports as you install more components
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { AspectRatio } from "@/components/ui/aspect-ratio"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import {
//   Breadcrumb,
//   BreadcrumbEllipsis,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command"
// import {
//   ContextMenu,
//   ContextMenuCheckboxItem,
//   ContextMenuContent,
//   ContextMenuItem,
//   ContextMenuLabel,
//   ContextMenuRadioGroup,
//   ContextMenuRadioItem,
//   ContextMenuSeparator,
//   ContextMenuShortcut,
//   ContextMenuSub,
//   ContextMenuSubContent,
//   ContextMenuSubTrigger,
//   ContextMenuTrigger,
// } from "@/components/ui/context-menu"
// import { DatePicker } from "@/components/ui/date-picker"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"
// import { Input } from "@/components/ui/input"
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/components/ui/input-otp"
// import { Label } from "@/components/ui/label"
// import {
//   Menubar,
//   MenubarCheckboxItem,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarRadioGroup,
//   MenubarRadioItem,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarSub,
//   MenubarSubContent,
//   MenubarSubTrigger,
//   MenubarTrigger,
// } from "@/components/ui/menubar"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { Progress } from "@/components/ui/progress"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Separator } from "@/components/ui/separator"
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Slider } from "@/components/ui/slider"
// import { Switch } from "@/components/ui/switch"
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Textarea } from "@/components/ui/textarea"
// import { Toggle } from "@/components/ui/toggle"
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"

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
} from 'lucide-react'

export default function SamplePage() {
    const [isDark, setIsDark] = useState(false)
    const [progress, setProgress] = useState(33)
    const [sliderValue, setSliderValue] = useState([50])

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

    return (
        <div className={`min-h-screen bg-background text-foreground ${isDark ? 'dark' : ''}`}>
            {/* Mobile Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between px-4">
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                        <h1 className="text-lg font-semibold">shadcn/ui Showcase</h1>
                    </div>
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 space-y-8">

                {/* Hero Section */}
                <section className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Welcome to shadcn/ui
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive showcase of all shadcn/ui components in a mobile-first design.
                        Explore, interact, and see how each component works.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Button size="lg" onClick={() => showToast('success')}>
                            <Play className="mr-2 h-4 w-4" />
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg">
                            <Star className="mr-2 h-4 w-4" />
                            Learn More
                        </Button>
                    </div>
                </section>

                {/* Button Variants Section */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Buttons</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                        <Button className="bg-merlin-blue-500">Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>
                </section>

                {/* Accordion Section */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Accordion</h3>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern and is fully accessible.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other components' aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It's animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* Toast Demo Section */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Toast Notifications (Sonner)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <Button onClick={() => showToast('default')}>
                            Default Toast
                        </Button>
                        <Button onClick={() => showToast('success')} variant="outline">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Success
                        </Button>
                        <Button onClick={() => showToast('error')} variant="destructive">
                            <XCircle className="mr-2 h-4 w-4" />
                            Error
                        </Button>
                        <Button onClick={() => showToast('info')} variant="secondary">
                            <Info className="mr-2 h-4 w-4" />
                            Info
                        </Button>
                    </div>
                </section>

                {/* Placeholder Sections for Components to be Added */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Form Controls</h3>
                    <div className="grid gap-4 p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Install these components to see them in action:
                        </p>
                        <div className="space-y-2 text-sm">
                            <code>npx shadcn@latest add input label checkbox radio-group select switch slider</code>
                        </div>
                        {/* Uncomment when components are installed */}
                        {/* <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </RadioGroup>
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
                />
              </div>
            </div> */}
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Navigation & Layout</h3>
                    <div className="grid gap-4 p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Install these components to see them in action:
                        </p>
                        <div className="space-y-2 text-sm">
                            <code>npx shadcn@latest add tabs breadcrumb navigation-menu pagination separator</code>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Data Display</h3>
                    <div className="grid gap-4 p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Install these components to see them in action:
                        </p>
                        <div className="space-y-2 text-sm">
                            <code>npx shadcn@latest add card avatar badge table calendar progress</code>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Overlays & Dialogs</h3>
                    <div className="grid gap-4 p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Install these components to see them in action:
                        </p>
                        <div className="space-y-2 text-sm">
                            <code>npx shadcn@latest add dialog sheet popover tooltip hover-card alert-dialog</code>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Feedback & Status</h3>
                    <div className="grid gap-4 p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Install these components to see them in action:
                        </p>
                        <div className="space-y-2 text-sm">
                            <code>npx shadcn@latest add alert skeleton progress</code>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Advanced Components</h3>
                    <div className="grid gap-4 p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Install these components to see them in action:
                        </p>
                        <div className="space-y-2 text-sm">
                            <code>npx shadcn@latest add command carousel resizable scroll-area data-table</code>
                        </div>
                    </div>
                </section>

                {/* Mobile-Specific Demo Section */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Mobile Interactions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Button className="w-full" size="lg">
                                <Download className="mr-2 h-4 w-4" />
                                Download App
                            </Button>
                            <Button variant="outline" className="w-full" size="lg">
                                <Share className="mr-2 h-4 w-4" />
                                Share
                            </Button>
                        </div>
                        <div className="space-y-2">
                            <Button variant="secondary" className="w-full" size="lg">
                                <Camera className="mr-2 h-4 w-4" />
                                Take Photo
                            </Button>
                            <Button variant="ghost" className="w-full" size="lg">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center py-8 text-muted-foreground">
                    <p>Built with shadcn/ui • Mobile-First Design</p>
                    <p className="text-sm mt-2">
                        Install more components to see them in action!
                    </p>
                </footer>
            </main>
        </div>
    )
}
