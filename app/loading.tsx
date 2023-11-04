function LoadingComponent() {
      return (
            <span className="loading loading-infinity loading-lg"></span>
      )
}
export default function LoadingPage() {
      return (
            <div className="bg-opacity-50 bg-base-100">
                  <div className="flex flex-col items-center justify-center h-screen">
                        <LoadingComponent />
                  </div>
            </div>
      )
}


