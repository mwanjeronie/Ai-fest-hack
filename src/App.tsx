import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Users, BookOpen, Wifi, WifiOff, Download } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6" />
            <span>3D Learn & Create</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#education" className="text-sm font-medium hover:underline underline-offset-4">
              Education
            </Link>
            <Link href="#collaboration" className="text-sm font-medium hover:underline underline-offset-4">
              Collaboration
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  3D Learning & Creation Without Boundaries
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Access educational 3D content offline and collaborate with artists worldwide, designed for remote
                  areas with limited connectivity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/explore">
                  <Button size="lg" className="gap-1">
                    <BookOpen className="h-4 w-4" />
                    Explore 3D Assets
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="lg" variant="outline" className="gap-1">
                    <Users className="h-4 w-4" />
                    Join Community
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="3D educational platform visualization"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is designed to work in challenging environments while providing powerful tools for learning
                and creation.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <WifiOff className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Offline Access</h3>
              <p className="text-center text-muted-foreground">
                Download educational content for offline use in areas with limited connectivity.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Download className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Low Bandwidth Mode</h3>
              <p className="text-center text-muted-foreground">
                Optimized for slow connections with progressive loading and compressed assets.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Collaborative Tools</h3>
              <p className="text-center text-muted-foreground">
                Work together on 3D projects with version control and real-time feedback.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <BookOpen className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Interactive Learning</h3>
              <p className="text-center text-muted-foreground">
                Engage with 3D models directly in lessons with annotations and guided tours.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Globe className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Multi-language Support</h3>
              <p className="text-center text-muted-foreground">
                Content available in multiple languages to support diverse communities.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Wifi className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Sync When Available</h3>
              <p className="text-center text-muted-foreground">
                Automatically synchronize work when internet connection is restored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Interactive 3D Education
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides immersive educational experiences through interactive 3D models, making complex
                  concepts easier to understand.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Anatomy and biology models with interactive layers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Engineering and mechanical systems visualization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Historical reconstructions and cultural heritage</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Mathematics and physics concept visualization</span>
                </li>
              </ul>
              <div>
                <Link href="/education">
                  <Button>Explore Educational Content</Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <Image
                src="/placeholder.svg?height=310&width=550"
                width={550}
                height={310}
                alt="3D educational content example"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr] items-center">
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full">
              <Image
                src="/placeholder.svg?height=310&width=550"
                width={550}
                height={310}
                alt="3D artist collaboration tools"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Collaborative Creation</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with other 3D artists and educators to create impactful educational content together,
                  regardless of location.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Real-time collaboration with version control</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Annotation tools for feedback and review</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Project management with task assignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Asynchronous collaboration for different time zones</span>
                </li>
              </ul>
              <div>
                <Link href="/collaboration">
                  <Button>Start Collaborating</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Growing Community
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Connect with educators and 3D artists worldwide to learn, create, and share knowledge.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-sm hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/education" className="text-sm hover:underline">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration" className="text-sm hover:underline">
                    Collaboration
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-sm hover:underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-sm hover:underline">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-sm hover:underline">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-sm hover:underline">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-sm hover:underline">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6" />
              <span className="text-lg font-bold">3D Learn & Create</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 3D Learn & Create. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

