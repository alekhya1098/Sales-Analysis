<<<<<<< HEAD
import matplotlib.pyplot as plt
import numpy as np

# Bottom 10 Products by Revenue data
products = [
    'Body Lotion',
    'Collagen Boost Night Cream',
    'Acne Spot Treatment Gel',
    'After Sun Aloe Lotion',
    'Hyaluronic Acid Serum',
    'Daily Moisturizing Face Cream',
    'Whitening Body Cream',
    'Pore Minimizing Toner',
    'Hand Cream',
    'Sunscreen Gel SPF 50'
]

revenue = [
    14555053.20,
    14598630.00,
    15311014.20,
    15638202.00,
    17058267.00,
    17660583.60,
    18377791.80,
    18590168.40,
    18856855.20,
    19246875.60
]

# Create figure and axis
plt.figure(figsize=(12, 6))

# Create bar chart
bars = plt.bar(products, revenue, color='#e74c3c', edgecolor='#c0392b', linewidth=1.5)

# Customize the chart
plt.title('📉 Bottom 10 Products by Revenue', fontsize=16, fontweight='bold', pad=20)
plt.xlabel('Product Name', fontsize=12, fontweight='bold')
plt.ylabel('Total Revenue ($)', fontsize=12, fontweight='bold')

# Format y-axis to show values in millions
ax = plt.gca()
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'${x/1e6:.1f}M'))

# Rotate x-axis labels for better readability
plt.xticks(rotation=45, ha='right', fontsize=10)
plt.yticks(fontsize=10)

# Add grid for better readability
plt.grid(axis='y', linestyle='--', alpha=0.3, zorder=0)

# Add value labels on top of bars
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height,
             f'${height/1e6:.2f}M',
             ha='center', va='bottom', fontsize=9, fontweight='bold')

# Adjust layout to prevent label cutoff
plt.tight_layout()

# Save the chart
plt.savefig('bottom10_products.png', dpi=300, bbox_inches='tight', facecolor='white')
print("✅ Chart saved as 'bottom10_products.png'")

# Display the chart
plt.show()
=======
import matplotlib.pyplot as plt
import numpy as np

# Bottom 10 Products by Revenue data
products = [
    'Body Lotion',
    'Collagen Boost Night Cream',
    'Acne Spot Treatment Gel',
    'After Sun Aloe Lotion',
    'Hyaluronic Acid Serum',
    'Daily Moisturizing Face Cream',
    'Whitening Body Cream',
    'Pore Minimizing Toner',
    'Hand Cream',
    'Sunscreen Gel SPF 50'
]

revenue = [
    14555053.20,
    14598630.00,
    15311014.20,
    15638202.00,
    17058267.00,
    17660583.60,
    18377791.80,
    18590168.40,
    18856855.20,
    19246875.60
]

# Create figure and axis
plt.figure(figsize=(12, 6))

# Create bar chart
bars = plt.bar(products, revenue, color='#e74c3c', edgecolor='#c0392b', linewidth=1.5)

# Customize the chart
plt.title('📉 Bottom 10 Products by Revenue', fontsize=16, fontweight='bold', pad=20)
plt.xlabel('Product Name', fontsize=12, fontweight='bold')
plt.ylabel('Total Revenue ($)', fontsize=12, fontweight='bold')

# Format y-axis to show values in millions
ax = plt.gca()
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'${x/1e6:.1f}M'))

# Rotate x-axis labels for better readability
plt.xticks(rotation=45, ha='right', fontsize=10)
plt.yticks(fontsize=10)

# Add grid for better readability
plt.grid(axis='y', linestyle='--', alpha=0.3, zorder=0)

# Add value labels on top of bars
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height,
             f'${height/1e6:.2f}M',
             ha='center', va='bottom', fontsize=9, fontweight='bold')

# Adjust layout to prevent label cutoff
plt.tight_layout()

# Save the chart
plt.savefig('bottom10_products.png', dpi=300, bbox_inches='tight', facecolor='white')
print("✅ Chart saved as 'bottom10_products.png'")

# Display the chart
plt.show()
>>>>>>> 3ab6b0b (Add project files)
