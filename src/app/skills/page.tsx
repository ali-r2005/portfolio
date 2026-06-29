import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-6 border-b border-border pb-4">
        <h1 className="text-3xl font-semibold text-foreground">Skills</h1>
        <p className="text-sm text-muted-foreground">Technologies I work with</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.category} className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-foreground">{group.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-sidebar px-3 py-1 text-sm text-text-secondary"
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
