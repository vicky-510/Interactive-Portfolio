
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Note, { NOTE_CATEGORIES } from '../models/noteModel.js';

// @desc    List notes (search/filter, pinned-first)
// route    GET /api/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
    const { search, category } = req.query;

    const filter = {};
    if (search) {
        const regex = new RegExp(String(search).trim(), 'i');
        filter.$or = [{ title: regex }, { content: regex }];
    }
    if (category) filter.category = category;

    const notes = await Note.find(filter).sort({ pinned: -1, updatedAt: -1 });
    res.status(200).json(notes);
});

// @desc    Create a note
// route    POST /api/notes
// @access  Private
const createNote = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;

    if (!title || !String(title).trim()) {
        res.status(400);
        throw new Error('Title is required');
    }
    if (!content || !String(content).trim()) {
        res.status(400);
        throw new Error('Content is required');
    }
    if (category && !NOTE_CATEGORIES.includes(category)) {
        res.status(400);
        throw new Error('Invalid category');
    }

    const note = await Note.create({ title, content, category });
    res.status(201).json(note);
});

// @desc    Update a note
// route    PUT /api/notes/:id
// @access  Private
const updateNote = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error('Invalid note id');
    }

    if (req.body.category && !NOTE_CATEGORIES.includes(req.body.category)) {
        res.status(400);
        throw new Error('Invalid category');
    }

    const note = await Note.findById(req.params.id);
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }

    Object.assign(note, req.body);
    const updated = await note.save();
    res.status(200).json(updated);
});

// @desc    Delete a note
// route    DELETE /api/notes/:id
// @access  Private
const deleteNote = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error('Invalid note id');
    }

    const note = await Note.findById(req.params.id);
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }

    await note.deleteOne();
    res.status(200).json({ _id: req.params.id });
});

// @desc    Toggle pin state
// route    PATCH /api/notes/:id/pin
// @access  Private
const togglePinNote = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error('Invalid note id');
    }

    const note = await Note.findById(req.params.id);
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }

    note.pinned = !note.pinned;
    const updated = await note.save();
    res.status(200).json(updated);
});

export { getNotes, createNote, updateNote, deleteNote, togglePinNote };
