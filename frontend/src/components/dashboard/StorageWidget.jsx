import PropTypes from 'prop-types';
import Card from '../ui/Card';

const formatMB = (bytes) => (bytes / (1024 * 1024)).toFixed(1);

function StorageWidget({ storage, isLoading }) {
  if (isLoading || !storage) {
    return (
      <Card title="Database Storage">
        <p className="text-muted mb-0">Loading storage usage...</p>
      </Card>
    );
  }

  const { usedBytes, capBytes, availableBytes, percentUsed } = storage;
  const barClass = percentUsed >= 90 ? 'danger' : percentUsed >= 70 ? 'warning' : '';

  return (
    <Card title="Database Storage">
      <div className="d-flex justify-content-between mb-2" style={{ fontSize: 14 }}>
        <span className="text-muted">Used <strong style={{ color: 'var(--admin-color-navy)' }}>{formatMB(usedBytes)} MB</strong></span>
        <span className="text-muted">Available <strong style={{ color: 'var(--admin-color-navy)' }}>{formatMB(availableBytes)} MB</strong></span>
        <span className="text-muted">Total <strong style={{ color: 'var(--admin-color-navy)' }}>{formatMB(capBytes)} MB</strong></span>
      </div>
      <div className="admin-storage-bar-track">
        <div
          className={`admin-storage-bar-fill ${barClass}`}
          style={{ width: `${Math.min(100, percentUsed)}%` }}
        />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <span className="text-muted" style={{ fontSize: 12 }}>{percentUsed}% used</span>
        {percentUsed >= 70 && (
          <span style={{ fontSize: 12, color: barClass === 'danger' ? 'var(--admin-color-danger)' : 'var(--admin-color-warning)' }}>
            {percentUsed >= 90 ? 'Storage nearly full' : 'Storage usage getting high'}
          </span>
        )}
      </div>
    </Card>
  );
}

StorageWidget.propTypes = {
  storage: PropTypes.shape({
    usedBytes: PropTypes.number,
    capBytes: PropTypes.number,
    availableBytes: PropTypes.number,
    percentUsed: PropTypes.number,
  }),
  isLoading: PropTypes.bool,
};

export default StorageWidget;
