import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import SearchInput from '../components/ui/SearchInput';
import FilterBar, { FilterSelect } from '../components/ui/FilterBar';
import EmptyState from '../components/ui/EmptyState';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import Loader from '../components/Loader';
import NoteCard from '../components/notes/NoteCard';
import NoteForm from '../components/notes/NoteForm';
import {
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
  useTogglePinNoteMutation,
} from '../slices/noteApiSlice';

const CATEGORIES = [
  'Interview Preparation',
  'Companies',
  'Technical Notes',
  'HR Notes',
  'Career',
  'Personal',
];

function Notes() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const { data: notes, isLoading, isError } = useGetNotesQuery({
    search: search || undefined,
    category: category || undefined,
  });

  const [addNote, { isLoading: isAdding }] = useAddNoteMutation();
  const [updateNote, { isLoading: isUpdating }] = useUpdateNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();
  const [togglePinNote] = useTogglePinNoteMutation();

  const [formOpen, setFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const submitHandler = async (values) => {
    try {
      if (editingNote) {
        await updateNote({ id: editingNote._id, ...values }).unwrap();
        toast.success('Note updated');
      } else {
        await addNote(values).unwrap();
        toast.success('Note created');
      }
      setFormOpen(false);
      setEditingNote(null);
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to save note');
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteNote(deleteTarget._id).unwrap();
      toast.success('Note deleted');
      setDeleteTarget(null);
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to delete note');
    }
  };

  return (
    <DashboardLayout title="Notes">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <h4 className="mb-0" style={{ color: 'var(--admin-color-navy)' }}>Notes</h4>
        <Button variant="primary" onClick={() => { setEditingNote(null); setFormOpen(true); }}>
          <BsPlusLg className="me-1" /> New Note
        </Button>
      </div>

      <FilterBar>
        <SearchInput value={search} onChange={setSearch} placeholder="Search notes..." />
        <FilterSelect value={category} onChange={setCategory} options={CATEGORIES} placeholder="All categories" />
      </FilterBar>

      {isLoading && <Loader />}
      {isError && <p className="text-danger">Could not load notes.</p>}

      {!isLoading && !isError && (
        notes.length === 0 ? (
          <EmptyState
            title="No notes yet"
            message="Capture interview prep, HR contacts, and career notes here."
            action={
              <Button variant="primary" onClick={() => { setEditingNote(null); setFormOpen(true); }}>
                <BsPlusLg className="me-1" /> New Note
              </Button>
            }
          />
        ) : (
          <div className="row g-3">
            {notes.map((note) => (
              <div className="col-12 col-sm-6 col-lg-4" key={note._id}>
                <NoteCard
                  note={note}
                  onEdit={(n) => { setEditingNote(n); setFormOpen(true); }}
                  onDelete={setDeleteTarget}
                  onTogglePin={(n) => togglePinNote(n._id)}
                />
              </div>
            ))}
          </div>
        )
      )}

      <NoteForm
        show={formOpen}
        onHide={() => { setFormOpen(false); setEditingNote(null); }}
        onSubmit={submitHandler}
        initialNote={editingNote}
        isSaving={isAdding || isUpdating}
      />

      <ConfirmDialog
        show={Boolean(deleteTarget)}
        onHide={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
        title="Delete Note"
        message={`Delete note "${deleteTarget?.title}"? This cannot be undone.`}
        confirmLabel="Delete"
        danger
      />
    </DashboardLayout>
  );
}

export default Notes;
