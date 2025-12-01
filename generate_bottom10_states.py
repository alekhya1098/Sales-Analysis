<<<<<<< HEAD
import matplotlib.pyplot as plt
import numpy as np

# Bottom 10 Performing States by Revenue (example data - replace with your actual data)
states = [
    'Wyoming',
    'Vermont',
    'Alaska',
    'North Dakota',
    'South Dakota',
    'Montana',
    'Delaware',
    'Rhode Island',
    'Maine',
    'New Hampshire'
]

revenue = [
    15000000,
    18000000,
    22000000,
    25000000,
    28000000,
    32000000,
    35000000,
    38000000,
    42000000,
    45000000
]

# Create figure and axis
plt.figure(figsize=(12, 6))

# Create horizontal bar chart
bars = plt.barh(states, revenue, color='#e67e22', edgecolor='#d35400', linewidth=1.5)

# Reverse y-axis to show lowest at top
plt.gca().invert_yaxis()

# Customize the chart
plt.title('📊 Bottom 10 Performing States by Revenue', fontsize=16, fontweight='bold', pad=20)
plt.xlabel('Total Revenue ($)', fontsize=12, fontweight='bold')
plt.ylabel('State', fontsize=12, fontweight='bold')

# Format x-axis to show values in millions
ax = plt.gca()
ax.xaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'${x/1e6:.0f}M'))

# Add grid for better readability
plt.grid(axis='x', linestyle='--', alpha=0.3, zorder=0)

# Add value labels at the end of bars
for i, (bar, val) in enumerate(zip(bars, revenue)):
    plt.text(val, i, f' ${val/1e6:.1f}M',
             va='center', ha='left', fontsize=10, fontweight='bold')

# Adjust layout to prevent label cutoff
plt.tight_layout()

# Save the chart
plt.savefig('bottom10_states.png', dpi=300, bbox_inches='tight', facecolor='white')
print("✅ Chart saved as 'bottom10_states.png'")

# Display the chart
plt.show()
=======
import matplotlib.pyplot as plt
import numpy as np

# Bottom 10 Performing States by Revenue (example data - replace with your actual data)
states = [
    'Wyoming',
    'Vermont',
    'Alaska',
    'North Dakota',
    'South Dakota',
    'Montana',
    'Delaware',
    'Rhode Island',
    'Maine',
    'New Hampshire'
]

revenue = [
    15000000,
    18000000,
    22000000,
    25000000,
    28000000,
    32000000,
    35000000,
    38000000,
    42000000,
    45000000
]

# Create figure and axis
plt.figure(figsize=(12, 6))

# Create horizontal bar chart
bars = plt.barh(states, revenue, color='#e67e22', edgecolor='#d35400', linewidth=1.5)

# Reverse y-axis to show lowest at top
plt.gca().invert_yaxis()

# Customize the chart
plt.title('📊 Bottom 10 Performing States by Revenue', fontsize=16, fontweight='bold', pad=20)
plt.xlabel('Total Revenue ($)', fontsize=12, fontweight='bold')
plt.ylabel('State', fontsize=12, fontweight='bold')

# Format x-axis to show values in millions
ax = plt.gca()
ax.xaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'${x/1e6:.0f}M'))

# Add grid for better readability
plt.grid(axis='x', linestyle='--', alpha=0.3, zorder=0)

# Add value labels at the end of bars
for i, (bar, val) in enumerate(zip(bars, revenue)):
    plt.text(val, i, f' ${val/1e6:.1f}M',
             va='center', ha='left', fontsize=10, fontweight='bold')

# Adjust layout to prevent label cutoff
plt.tight_layout()

# Save the chart
plt.savefig('bottom10_states.png', dpi=300, bbox_inches='tight', facecolor='white')
print("✅ Chart saved as 'bottom10_states.png'")

# Display the chart
plt.show()
>>>>>>> 3ab6b0b (Add project files)
