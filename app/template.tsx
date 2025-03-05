// app/template.js
export default function Template({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div>
        <h3>App 的 Template</h3>
        {children}
    </div>
  }