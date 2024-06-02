import { Link, Outlet } from "react-router-dom";

export default function Analytics() {
  return (
    <div className="bg">
    <div className="max-w-4xl mx-auto text-center bg-slate-400 pb-20">
        <p className="text-center text-2xl pt-10 mb-6">Here is the company analytics</p>
        <p className="mb)10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores laudantium sunt culpa totam error, architecto asperiores magnam ratione accusamus odit obcaecati ea labore placeat qui iusto fugiat illo consequuntur consectetur natus est explicabo facilis. Quam doloribus id temporibus aliquid cum fugit laborum voluptatem. Incidunt eum cumque molestias sit architecto?</p>
        <nav className="text-center">
            <Link
                to="/analytics/development"
                className="mx-2 font-semibold text-lg"
            >
                Development
            </Link>
            <Link
                to="/analytics/cybersecurity"
            >
                CyberSecurity
            </Link>
            <Link
            to="/analytics/uiux"
            >
                UI/UX
            </Link>
        </nav>
        <Outlet />
    </div>
</div>
  )
}