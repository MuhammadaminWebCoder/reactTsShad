const ContactLocate = () => {
  return (
    <section className="containerOn">
      <div className="bg-white py-12 px-4">
      <h2 className="text-4xl text-center font-semibold mb-10">Locations</h2>
      <div className="flex max-w-[1000px] mx-auto justify-between gap-12 mb-8">
        <div>
          <h3 className="text-2xl mb-4">Corporate</h3>
          <p>100 Sylvan Rd<br />Suite G-700<br />Woburn, MA 01801</p>
        </div>
        <div>
          <h3 className="text-2xl mb-4">Chicago</h3>
          <p>5600 N River Rd<br />Suite 100<br />Rosemont, IL 60018</p>
        </div>
        <div>
          <h3 className="text-2xl mb-4">New York</h3>
          <p>150 Woodbury Rd<br />Suite 8<br />Woodbury, NY 11797</p>
        </div>
      </div>
      <div className="mb-4 text-center text-lg">
        <strong className="text-xl font-semibold">Call Us:</strong> <span>800-603-9936</span>
      </div>
      <div className="text-center">
        <p className="mb-2">
          In addition, Bridgeline has satellite offices in the following locations:
        </p>
        <div className="flex flex-wrap text-xl justify-center gap-2 font-semibold">
          <span>Belgium</span><span className="px-1">|</span>
          <span>California</span><span className="px-1">|</span>
          <span>Colorado</span><span className="px-1">|</span>
          <span>Florida</span><span className="px-1">|</span>
          <span>Michigan</span><span className="px-1">|</span>
          <span>North Carolina</span><span className="px-1">|</span>
          <span>Texas</span>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactLocate;
