const Products = () => {
  return (
    <section className="grid grid-cols-1 gap-6 px-4 md:px-6 py-12 md:py-24 max-w-screen-xl mx-auto">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <img src="/placeholder.jpg" alt="Flavored Nuts" width={500} height={400} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">Flavored Nuts</h3>
          <p className="text-muted-foreground">A delightful blend of roasted nuts with a touch of natural flavoring.</p>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <img src="/placeholder.jpg" alt="Cherry Vodka" width={500} height={400} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">Cherry Vodka & Cider</h3>
          <p className="text-muted-foreground">
            A unique pairing of cherry-infused vodka and a refreshing cherry cider.
          </p>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <img
          src="/placeholder.jpg"
          alt="Freeze-Dried Fruit"
          width={500}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">Freeze-Dried Fruit</h3>
          <p className="text-muted-foreground">
            Delicious and crunchy freeze-dried fruit snacks, perfect for on-the-go.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Products
