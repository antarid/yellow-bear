import React from 'react';
import { render, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Jog } from '../../../interfaces';
import Jogs from '../index';
import { AppWrapper } from '../../../App';
import * as api from '../../../api';

describe('Jogs', () => {
  let spy: jest.SpyInstance<Promise<Response>, []>;

  afterEach(() => spy.mockReset());

  const renderWithWrappers = (component: JSX.Element) => {
    render(<AppWrapper>{component}</AppWrapper>);
  };

  const mockFetchJogs = (jogs: Jog[]): Promise<Response> => {
    spy = jest.spyOn(api, 'fetchJogs');
    const result: any = Promise.resolve({
      json: () =>
        Promise.resolve({
          response: {
            jogs,
          },
        }),
    });
    spy.mockResolvedValueOnce(result);
    return result;
  };

  it('should display fetched jogs', async () => {
    const result = mockFetchJogs([
      { id: 1126, user_id: '3', distance: 11, time: 1, date: 1572350040 },
      { id: 1127, user_id: '3', distance: 1, time: 1, date: 1572350100 },
      { id: 1129, user_id: '3', distance: 1, time: 1, date: 1572350400 },
      { id: 1142, user_id: '3', distance: 1, time: 1, date: 1572322620 },
    ]);
    renderWithWrappers(<Jogs />);
    expect(screen.getByText(/Nothing is there/i)).toBeInTheDocument();
    await act(async () => {
      await result;
    });
    expect(spy).toBeCalledTimes(1);
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.queryByText(/Nothing is there/i)).not.toBeInTheDocument();
  });

  it('should display message if nothing is fetched', async () => {
    const result = mockFetchJogs([]);
    renderWithWrappers(<Jogs />);
    expect(screen.getByText(/Nothing is there/i)).toBeInTheDocument();
    await act(async () => {
      await result;
    });
    expect(spy).toBeCalledTimes(1);
    expect(screen.getByText(/Nothing is there/i)).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('should open and close popup', async () => {
    const result = mockFetchJogs([
      { id: 1126, user_id: '3', distance: 11, time: 1, date: 1572350040 },
    ]);
    renderWithWrappers(<Jogs />);
    await act(async () => {
      await result;
    });
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('open-popup-button'));
    expect(screen.getByTestId('popup')).toBeInTheDocument();
    expect(screen.queryByTestId('open-popup-button')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('+')); // close popup button
    expect(screen.getByTestId('open-popup-button')).toBeInTheDocument();
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });
});
