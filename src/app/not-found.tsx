import Link from "next/link"
import { FaceFrownIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card">
        <FaceFrownIcon className="h-10 w-10 text-primary" />
      </div>

      <div className="space-y-2">
        <h1 className="text-7xl font-bold text-foreground">
          404
        </h1>
        <p className="text-xl font-semibold text-foreground">
          This page took a wrong turn.
        </p>
        <p className="text-base text-muted-foreground">
          Looks like you&apos;ve wandered into the void. The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="default" size="lg">
            Return Home
          </Button>
        </Link>
        <Link href="/projects">
          <Button variant="outline" size="lg">
            Browse Projects
          </Button>
        </Link>
      </div>
    </div>
  )
}
