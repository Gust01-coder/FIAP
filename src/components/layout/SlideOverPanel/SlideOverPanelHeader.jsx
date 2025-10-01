function SliderOverPanelHeader({ setSelectedUserContact }) {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Detalhes</h2>
        <button
          type="button"
          onClick={() => {
            setSelectedUserContact(null);
          }}
          className="text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <i className="bi bi-x text-4xl"></i>
        </button>
      </div>
    </div>
  );
}

export default SliderOverPanelHeader;
