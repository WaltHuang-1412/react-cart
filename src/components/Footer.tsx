export const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50 mt-10">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} React Cart 商店. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
