import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl font-semibold text-foreground">Skills</h1>
        <p className="mt-2 text-base text-muted-foreground">Technologies I work with</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.category} className="border-border bg-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold text-foreground">{group.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-sidebar p-4 text-base text-text-secondary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
