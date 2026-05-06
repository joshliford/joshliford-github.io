export default function About() {
  return (
    <div className="space-y-4 max-w-3xl px-6 md:px-8 lg:px-12">
      <p className="text-slate-300">
        After working for several years in a high-stress emergency department, I
        realized I wanted to solve problems at a different scale. I transitioned
        into software development because I love the challenge of building
        tools/applications that make people's lives easier - whether that's a
        patient in the ER or a developer trying to ship features faster.
      </p>

      <p className="text-slate-300">
        I'm currently working as an Applications Developer, collaborating with
        other developers to build a custom CLI housing a suite of specialized AI
        agents. <br></br>
        <br></br>The <span className="text-slate-100 italic">Dev Team</span> is
        an agent orchestration suite built around the{" "}
        <span className="text-slate-100 italic">Captain agent</span> that
        orchestrates every phase of the build. When a developer or dev team is
        ready to work a Jira issue, the Captain agent picks it up and delegates{" "}
        <span className="text-slate-100 italic">spec.md</span> creation with
        specific Acceptance Criteria to the{" "}
        <span className="text-slate-100 italic">BA agent</span>, then hands off
        to the <span className="text-slate-100 italic">SEA agent</span> for
        architecture planning and{" "}
        <span className="text-slate-100 italic">plan.md</span> creation, then
        produces a <span className="text-slate-100 italic">tasks.md</span> by
        breaking the plan into manageable tasks. The{" "}
        <span className="text-slate-100 italic">Coder</span> and{" "}
        <span className="text-slate-100 italic">QA</span> agents then iterate
        through those tasks in the{" "}
        <a
          href="https://ghuntley.com/loop/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 text-white italic transition-colors"
        >
          Ralph Loop
        </a>{" "}
        until every task is satisfied, after which the BA, SEA, Security, and UX
        agents all evaluate the final product before delivery. The entire
        orchestration workflow follows{" "}
        <a
          href="https://github.com/github/spec-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 text-white italic transition-colors"
        >
          Spec-Driven Development (SDD)
        </a>
        . <br></br>
        <br></br>The{" "}
        <span className="text-slate-100 italic">Prototype agent</span> operates
        independently — spinning up UI-only prototypes quickly while accounting
        for enterprise-grade considerations, with the ability to hand off to the{" "}
        <span className="text-slate-100 italic">Agile agent</span> for Jira
        issue creation. The Agile agent integrates directly with the Atlassian
        MCP inside VS Code, handling daily scrum workflows and creating or
        modifying Jira issues without leaving the editor. Rounding out the suite
        is the <span className="text-slate-100 italic">Atlas agent</span> — a
        condensed version of the entire dev team that assumes all seven roles
        for rapid feature implementation when strict SDD guardrails aren't
        required, while still maintaining strict guardrails around delivering
        safe, secure, and quality enterprise-grade software.
      </p>

      <p className="text-slate-300">
        When I'm not writing code, I am a father of twin boys, I enjoy playing
        video games (
        <a
          href="https://store.steampowered.com/app/264710/Subnautica/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 text-white italic transition-colors mr-1"
        >
          Subnautica
        </a>
        and the
        <a
          href="https://www.playstation.com/en-us/god-of-war/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 text-white italic transition-colors ml-1 mr-1"
        >
          God of War
        </a>
        series are some of my personal favorites), and I enjoy playing the
        guitar.
      </p>
    </div>
  );
}
