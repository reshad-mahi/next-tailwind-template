import SearchField from '@/components/ui/search';
import Link from 'next/link';
import { columns } from '../../../components/owner/capacity-list/columns';
import { DataTable } from '../../../components/owner/capacity-list/data-table';

async function getData() {
  // Fetch data from your API here.
  return [
    {
      title: 'Title',
      capacityId: 'ABC1',
      date: '2023-12-01',
      featured: false,
      status: 'live',
      action: 'edit',
    },
    {
      title: 'Title',
      capacityId: 'ABC2',
      date: '2023-12-01',
      featured: true,
      status: 'under-review',
      action: 'edit',
    },
    {
      title: 'Title',
      capacityId: 'ABC3',
      date: '2023-12-01',
      featured: false,
      status: 'live',
      action: 'edit',
    },
    {
      title: 'Title',
      capacityId: 'ABC4',
      date: '2023-12-01',
      featured: true,
      status: 'under-review',
      action: 'edit',
    },
    {
      title: 'Title',
      capacityId: 'ABC5',
      date: '2023-12-01',
      featured: true,
      status: 'under-review',
      action: 'edit',
    },
    {
      title: 'Title',
      capacityId: 'ABC6',
      date: '2023-12-01',
      featured: false,
      status: 'live',
      action: 'edit',
    },

    {
      title: 'Title',
      capacityId: 'ABC7',
      date: '2023-12-01',
      featured: false,
      status: 'live',
      action: 'edit',
    },
    {
      title: 'Title',
      capacityId: 'ABC8',
      date: '2023-12-01',
      featured: true,
      status: 'under-review',
      action: 'edit',
    },
    {
      title: 'Title',
      capacityId: 'ABC9',
      date: '2023-12-01',
      featured: false,
      status: 'live',
      action: 'edit',
    },
    // ...
  ];
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <div className="py-5 flex justify-between items-center">
        <h2 className="headline-small">My capacity</h2>
        <Link href="/owner/add-capacity" className="main-btn">
          Add a new capacity
        </Link>
      </div>
      <SearchField placeholder="Search" />
      <div className="mt-5">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default page;
