import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import NewsPage from '../../pages/News.jsx';
import * as newsService from '../../services/newsService';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

const sample = [
  { title: 'One', description: 'First' },
  { title: 'Two', description: 'Second' },
];

describe('News page', () => {
  beforeEach(() => {
    vi.spyOn(newsService, 'fetchNews').mockResolvedValue(sample);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders news after fetch and can delete an item', async () => {
    render(<NewsPage />);

    // wait for items to appear
    await waitFor(() => {
      expect(screen.getByText('One')).toBeInTheDocument();
      expect(screen.getByText('Two')).toBeInTheDocument();
    });

    const deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons).toHaveLength(2);

    // click first delete
    fireEvent.click(deleteButtons[0]);

    // item One should be removed
    await waitFor(() => {
      expect(screen.queryByText('One')).not.toBeInTheDocument();
      expect(screen.getByText('Two')).toBeInTheDocument();
    });
  });
});
