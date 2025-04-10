import { format } from 'date-fns'; 

interface ContentObject {
  [key: string]: any;
}

interface EntryProps {
  _id: string;
  content: ContentObject;
  form_id: string;
  createdAt: number;
}

interface A_SingleElemProps {
  entry: EntryProps;
}

export default function A_SingleElem({ entry }: A_SingleElemProps) {
  const formatDate = (timestamp: number) => {
    try {
      return format(new Date(timestamp * 1000), 'dd.MM.yyyy HH:mm');
    } catch {
      return 'Invalid date';
    }
  };

  return (
    <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm bg-cyan-100">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Заявка на сайте</h2>
        <div className="mt-2 text-sm text-gray-500">ID: {entry._id}</div>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium text-gray-700">Содержимое:</h3>
        <div className="mt-2 p-3 bg-gray-50 rounded-md">
          {Object.entries(entry.content).map(([key, value]) => (
            <div key={key} className="mb-2 last:mb-0">
              <span className="font-medium text-gray-600">{key}: </span>
              <span className="text-gray-800">
                {typeof value === 'object' 
                  ? JSON.stringify(value) 
                  : value.toString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Form ID:</span>
          <span className="ml-2 text-gray-800">{entry.form_id}</span>
        </div>
        <div>
          <span className="text-gray-500">Дата:</span>
          <span className="ml-2 text-gray-800">
            {formatDate(entry.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
}