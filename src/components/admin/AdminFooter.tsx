const AdminFooter = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="py-4 bg-muted">
      <section className="center flex justify-end text-sm">
        &copy; {year} by Real-Estate | All Rights Reserved
      </section>
    </footer>
  )
}
export default AdminFooter