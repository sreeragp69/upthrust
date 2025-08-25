
import PageMeta from "../components/common/PageMeta";

export default function Blank() {
  return (
    <div>
      <PageMeta
        title="React.js Blank  Reactjs | TailAdmin"
        description="This is React.js Course page for TailAdmin - React.js "
      />
      
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7  xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl  sm:text-2xl">
            Card Title Here
          </h3>

          <p className="text-sm text-gray-500  sm:text-base">
            Start putting content on grids or panels, you can also use different
            combinations of grids
          </p>
        </div>
      </div>
    </div>
  );
}
