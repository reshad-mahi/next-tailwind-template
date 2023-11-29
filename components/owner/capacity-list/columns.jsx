'use client';
import Icon from '@mdi/react';
import {
  mdiStarOutline,
  mdiCheck,
  mdiWindowMinimize,
  mdiDotsVertical,
} from '@mdi/js';
import { Button } from '@/components/ui/button';
import { Dropdown } from '@/components/custom/Dropdown';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
const handleDelete = () => {
  console.log('deleted');
};

const handleFeature = () => {
  console.log('feature');
};

export const columns = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'capacityId',
    header: 'Capacity ID',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'featured',
    header: 'Featured',
    cell: ({ row }) => {
      const isFeatured = row.getValue('featured');

      return (
        <div className="flex justify-center">
          {isFeatured ? (
            <Icon path={mdiStarOutline} size={1} />
          ) : (
            <Icon path={mdiWindowMinimize} size={1} />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status');

      // Assuming you have a Button component that you can import and use
      const liveButton = (
        <Button className="status-btn">
          <span>
            <Icon path={mdiCheck} size={1} />
          </span>{' '}
          Live
        </Button>
      );
      const underReviewButton = (
        <Button className="status-btn review-btn">Under Review</Button>
      );

      return <div>{status === 'live' ? liveButton : underReviewButton}</div>;
    },
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const actions = [
        {
          label: 'Mark as Featured',
          onClick: () => {
            setOpenD(true);
            // Logic to mark the row as featured
          },
          content: {
            header: 'Feature Confirmation?',
            description: 'description for feature',
            action: handleFeature,
          },
        },
        {
          label: 'Delete',
          onClick: () => {
            setOpenD(true);

            // Logic to delete the row
          },

          content: {
            header: 'Are you sure you want to delete it?',
            description: 'description for delete',
            action: handleDelete,
          },
        },
      ];
      const [openD, setOpenD] = useState(false);
      const [dialogContent, setDialogContent] = useState(null);
      const handleActionClick = (action) => {
        setDialogContent(action.content);
        setOpenD(true);
      };

      return (
        <section className="flex justify-center">
          <Dropdown
            actions={actions.map((action) => ({
              label: action.label,
              onClick: () => handleActionClick(action),
            }))}
            buttonText={<Icon path={mdiDotsVertical} size={1} />}
            className="w-[180px]"
          />

          <Dialog open={openD}>
            <DialogContent className="sm:max-w-[560px]">
              <DialogHeader className="pb-[30px]">
                <DialogTitle className="headline-small">
                  {dialogContent && dialogContent.header}
                </DialogTitle>
                <DialogDescription className="body-medium mt-[16px]">
                  {dialogContent && dialogContent.description}
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button
                  type="text"
                  onClick={() => setOpenD(false)}
                  className="transparent-btn"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={dialogContent?.action}
                  className="main-btn"
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
      );
    },
  },
];
